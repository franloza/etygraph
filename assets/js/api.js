const BASE_URL = "etytree-virtuoso.wmflabs.org";
const SPARQL_ENDOINT = "https://" + BASE_URL + '/sparql';
const MAX_DEPTH = 10;

export function getAncestors(word, lang, on_add_node_callback, on_finish_callback, recursive = true, processed = undefined) {
  if (processed === undefined) {
    processed = [];
  }  
  var result = {}
  var prefix = (lang== "eng") ? "" : `${lang}/`;
  var clean_word = word.trim().replace(' ', '_');
  var word_uri = `http://${BASE_URL}/dbnary/eng/${prefix}__ee_1_${clean_word}`;
  var pending = []; 
  if (processed.includes(word_uri)) {
    on_finish_callback(result, getId(word_uri));
  }
  _getAncestors(word_uri, on_add_node_callback, on_finish_callback, recursive, 1, processed, result, pending);
}

function getId(uri) {
  const regex = /__ee_\d+_/gm; 
  const subst = `__ee_`;
  var uri = uri.replace(regex, subst);
  var id = uri.split("/");
  return id[id.length - 2] + "_" + id[id.length - 1];
}

function getSecondaryUri(uri) {
  var secondary_uri;
  if (uri.includes('__ee_1_')) {
    secondary_uri = uri.replace('__ee_1_', '__ee_');
  }
  else {
    secondary_uri = uri.replace('__ee_', '__ee_1_');
  }
  return secondary_uri;
}

export function mergeNode(node_a, node_b) {
  var node_a_labels = node_a.label.split(',');
  node_a_labels = node_a_labels.concat(node_b.label.split(","));
  node_a.label = [...(new Set(node_a_labels))].join(",")
  node_a.relative_ids = new Set([...node_a.relative_ids, ...node_b.relative_ids]);
  node_a.relative_uris = new Set([...node_a.relative_uris, ...node_b.relative_uris]);
  node_a.equivalent_ids = new Set([...node_a.equivalent_ids, ...node_b.equivalent_ids]);
  node_a.equivalent_uris = new Set([...node_a.equivalent_uris, ...node_b.equivalent_uris]);
  node_a.links == new Set([...node_a.links, ...node_b.links]);
  node_a.uris == new Set([...node_a.uris, ...node_b.uris]);
  return node_a
}


function _getAncestors(uri, on_add_node_callback, on_finish_callback, recursive, depth, processed, result, pending) {
  function describeUriCallback (url, data) {
    pending.pop();
    var parsed = parseResponse(data);

    if (parsed !== undefined) {
      if (result[parsed.id] !== undefined) {
        // Two nodes with same ID and different URIs
        var node = parsed;
        result[parsed.id] = mergeNode(node, result[parsed.id]);
      }
      else {
        var node = parsed;
        result[parsed.id] = parsed;
      }
      on_add_node_callback(node);
      processed.push(url);
      if (recursive && depth < MAX_DEPTH) {
        parsed.relative_uris.forEach(element => {
          if (!processed.includes(element)) {
            _getAncestors(element, on_add_node_callback, on_finish_callback, recursive, depth+1, processed, result, pending)
          }
        });
        parsed.equivalent_uris.forEach(element => {
          if (!processed.includes(element)) {
            _getAncestors(element, on_add_node_callback, on_finish_callback, recursive, depth, processed, result, pending)
          }
        });        
      }
    }
    if (pending.length == 0) {
      on_finish_callback(result, getId(url))
    }
  }
  [uri, getSecondaryUri(uri)].forEach(function (element, i) {
    if (!processed.includes(element) && !pending.includes(element)) {
      pending.push(element);
      describeUri(element, function (data) {
        describeUriCallback(element, data)
      });
    }
  });  
}

export function mergeEquivalentNodes(graph) {
  var sets = [];
  for (const [id, node] of Object.entries(graph)) {
    var set = new Set(node.equivalent_ids);
    set.add(id);
    sets.push(set);
  }

  // Merge sets based on intersections
  var merged = true;
  while(merged) {
    merged = false;
    var results = [];
    while (sets.length > 0) {
      var common = sets[0];
      var rest = sets.slice(1);
      sets = [];
      for (const element of rest) {
        var is_disjoint = (new Set([...element].filter(x => common.has(x)))).size == 0;
        if (is_disjoint) {
          sets.push(element);
        } else {
          merged = true;
          common =  new Set([...common, ...element]);
        }
      }
      results.push(common);
    }
    sets = results;
  }

  // Create new graph
  var merged_graph = {};
  var aliases = {};
  for (const equivalent_ids of sets) {
    var merge_id = undefined;
    for (const equivalent_id of equivalent_ids) {
      if (graph[equivalent_id] !== undefined) {
        var equivalent_node = graph[equivalent_id];
        if (merge_id === undefined) {
          merge_id = equivalent_id;
          merged_graph[equivalent_id] = equivalent_node;
        } else {
          var merge_node = merged_graph[merge_id];
          merged_graph[merge_id] = mergeNode(merge_node, equivalent_node)
        } 
      }
    }
    if (merge_id !== undefined) {
      for (const equivalent_id of equivalent_ids) {
        aliases[equivalent_id] = merge_id;
      }
    } 
  }

  // Replace references to merged nodes in relatives and remove self loops and dangling references
  for (const [id, node] of Object.entries(merged_graph)) {
    var relative_ids = [];
    for (const relative_id of node.relative_ids) {
      if (aliases[relative_id] === undefined) {
        if (merged_graph[relative_id] !== undefined) {
          if (node.id != relative_id) {
            relative_ids.push(relative_id);
          }
        }
      } else {
        if (node.id != aliases[relative_id]) {
          relative_ids.push(aliases[relative_id])
        }
      }   
    }
    merged_graph[id].relative_ids = relative_ids;
  }
  return merged_graph;
}


export function getWords(word, lang, callback) {
  word = word.split(' ')[0];
  var query = `
    SELECT DISTINCT (STR($label) as $label) ?ee 
    WHERE {     ?iri rdfs:label ?label .   
                ?label bif:contains "'${word}*'" .    
                FILTER (!isBlank(?ee)) .
                FILTER (lang(?label) = '${lang}')
      OPTIONAL {        
        ?iri dbnary:describes ?ee . 
        ?ee rdf:type dbetym:EtymologyEntry .    
      }
    } 
  `;
  sparqlQuery(query, function (data) {
    callback(data.results.bindings.map(x => {
      return {word: x.label.value, uri: x.ee.value}
    }));
  });
}


function describeUri(uri, callback) {
  var query = `
      DEFINE sql:describe-mode "CBD"
      DESCRIBE <${uri}>
  `;
  sparqlQuery(query, function (data) {
    callback(data)
  });
}


function sparqlQuery(query, callback) {
  axios.get(SPARQL_ENDOINT, {
    params: {
      query: query,
      output: "application/json"
    }
  })
  .then(function (response) {
    var data = {}
    if (response.status == 200) {
        data = response.data;
      }
    callback(data)
  })
  .catch(function (error) {
    console.log(error);
  });  
}

function parseResponse(raw) {
  for (const [uri, fields] of Object.entries(raw)) {
    var id =  getId(uri);
    var node = {id:id, relative_ids: new Set(), relative_uris: new Set(), equivalent_ids: new Set(), equivalent_uris: new Set(), links: new Set(), uris: new Set()};
    node.uris.add(uri);
    for (const [field_id, field_data] of Object.entries(fields)) {
      if (field_id.includes('#label')) {
        node.label = field_data[0].value;
        node.lang = field_data[0].lang
      } else if(field_id.includes('#etymologicallyRelatedTo')) {
        node.relative_ids = new Set(field_data.map(element => getId(element.value)))
        node.relative_uris = new Set(field_data.map(element => element.value))
      }
      else if(field_id.includes('#etymologicallyEquivalentTo')) {
        node.equivalent_ids = new Set(field_data.map(element => getId(element.value)))
        node.equivalent_uris = new Set(field_data.map(element => element.value))
      }
      else if(field_id.includes('#seeAlso')) {
        node.links = new Set(field_data.map(element => element.value))
      }
    }
  }
  return node;
}

