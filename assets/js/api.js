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

export function mergeNode(node_a, node_b) {
  var node_a_labels = node_a.label.split(',');
  node_a_labels = node_a_labels.concat(node_b.label.split(","));
  node_a.label = [...(new Set(node_a_labels))].join(",")
  node_a.relatives = new Set([...node_a.relatives, ...node_b.relatives])
  node_a.equivalents = new Set([...node_a.equivalents, ...node_b.equivalents])
  node_a.links == new Set([...node_a.links, ...node_b.links])
  return node_a
}


function _getAncestors(uri, on_add_node_callback, on_finish_callback, recursive, depth, processed, result, pending,
    equivalent=undefined
  ) {
  pending.push(uri);
  describeUri(uri, function(data) {
      pending.pop();
      var parsed = parseResponse(data);

      if (parsed == undefined) {
          processed.push(parsed);
      } else {
        if (equivalent !== undefined && result[equivalent.id] !== undefined) {
          // Merge node
          var node = result[equivalent.id];
          result[equivalent.id] = mergeNode(node, parsed)
          delete result[parsed.id];
        }
        else {
          var node = parsed;
          result[parsed.id] = parsed;
        }
        on_add_node_callback(node);
        processed.push(parsed.id);
        if (recursive && depth < MAX_DEPTH) {
          parsed.relatives.forEach(element => {
            if (!processed.includes(element)) {
              _getAncestors(element, on_add_node_callback, on_finish_callback, recursive, depth+1, processed, result, pending)
            }
          });
          parsed.equivalents.forEach(element => {
            if (!processed.includes(element)) {
              _getAncestors(element, on_add_node_callback, on_finish_callback, recursive, depth, processed, result, pending, parsed)
            }
          });        
        }
      }
      if (pending.length == 0) {
        on_finish_callback()
      }
  })
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
  for (const [node_id, fields] of Object.entries(raw)) {
    var node = {id: node_id, relatives: new Set(), equivalents: new Set(), links: new Set()};
    for (const [field_id, field_data] of Object.entries(fields)) {
      if (field_id.includes('#label')) {
        node.label = field_data[0].value;
        node.lang = field_data[0].lang
      } else if(field_id.includes('#etymologicallyRelatedTo')) {
        node.relatives = new Set(field_data.map(element => element.value))
      }
      else if(field_id.includes('#etymologicallyEquivalentTo')) {
        node.equivalents = new Set(field_data.map(element => element.value))
      }
      else if(field_id.includes('#seeAlso')) {
        node.links = new Set(field_data.map(element => element.value))
      }
    }
  }
  return node;
}

