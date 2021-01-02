const BASE_URL = "etytree-virtuoso.wmflabs.org";
const SPARQL_ENDOINT = "https://" + BASE_URL + '/sparql';
const MAX_DEPTH = 10;

export function getAncestors(word, lang, on_add_node_callback, on_finish_callback, recursive = true) {
    var result = {
    }
    var prefix = (lang== "eng") ? "" : `${lang}/`;
    var clean_word = word.trim().replace(' ', '_');
    var word_uri = `http://${BASE_URL}/dbnary/eng/${prefix}__ee_1_${clean_word}`;
    var pending = []; 
    _getAncestors(word_uri, on_add_node_callback, on_finish_callback, recursive, 1, [], result, pending);
}

function getId(uri) {
  var uri = uri.replace('__ee_1_', '__ee_')
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


function _getAncestors(uri, on_add_node_callback, on_finish_callback, recursive, depth, processed, result, pending,
    equivalent=undefined
  ) {
  function describeUriCallback(data) {
    pending.pop();
    var parsed = parseResponse(data);

    if (parsed !== undefined) {
      if (equivalent !== undefined && result[equivalent.id] !== undefined) {
        // Merge equivalent nodes
        var node = result[equivalent.id];
        result[equivalent.id] = mergeNode(node, parsed)
        delete result[parsed.id];
      }
      else if (result[parsed.id] !== undefined) {
        // Two nodes with same ID and different URIs
        var node = parsed;
        result[parsed.id] = mergeNode(node, result[parsed.id]);
      }
      else {
        var node = parsed;
        result[parsed.id] = parsed;
      }
      on_add_node_callback(node);
      processed.push(parsed.id);
      if (recursive && depth < MAX_DEPTH) {
        parsed.relative_uris.forEach(element => {
          if (!processed.includes(element)) {
            _getAncestors(element, on_add_node_callback, on_finish_callback, recursive, depth+1, processed, result, pending)
          }
        });
        parsed.equivalent_uris.forEach(element => {
          if (!processed.includes(element)) {
            _getAncestors(element, on_add_node_callback, on_finish_callback, recursive, depth, processed, result, pending, parsed)
          }
        });        
      }
    }
    if (pending.length == 0) {
      on_finish_callback(result)
    }
  }

  [uri, getSecondaryUri(uri)].forEach(function (element, i) {
    if (!processed.includes(element) && !pending.includes(element)) {
      pending.push(element);
      describeUri(element, describeUriCallback);
    }
  });  
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

