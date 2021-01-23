import {loadLanguageMap} from './data/load.js';

const DAG_ELEMENT_ID = 'dag-panel'
const MODAL_ELEMENT_ID = 'node-modal'
const DEFAULT_SCALE = 1;
export const LANGUAGE_MAP = loadLanguageMap();

var g = resetDAG()
var root_node = undefined;

function resetDAG() {
    g = new dagreD3.graphlib.Graph({directed:true, compound:true, multigraph:false})
    .setGraph({})
    .setDefaultEdgeLabel(function() { return {}; })
    .setDefaultNodeLabel(function() { return {}; });

    g.setGraph({
      nodesep: 70,
      ranksep: 50,
      marginx: 20,
      marginy: 20
    });

    g.graph().transition = function(selection) {
      return selection.transition().duration(500);
    };

    return g
}

export function clearDAG() {
  g = resetDAG();
  d3.select(`#${DAG_ELEMENT_ID}`).select('g').remove();
}

function getZoom(svg) {
  return d3.zoom()
           .scaleExtent([0.02, 8])
          .on("zoom", function() {
            svg.attr("transform", d3.event.transform)
          });
}

export function DAGisRendered() {
  return !d3.select(`#${DAG_ELEMENT_ID}`).select("g").empty();
}

export function renderDAG(node_on_click_callback=undefined) {

  // Create the renderer
  var render = new dagreD3.render();

  // Set up an SVG group so that we can translate the final graph.
  var svg = d3.select(`#${DAG_ELEMENT_ID}`).attr("preserveAspectRatio", "xMinYMin meet")

  if (DAGisRendered()){
    var svgGroup = svg.select('g');
  } else {
    var svgGroup = svg.append('g');
  }

  g.nodes().forEach(function(v) {
    var node = g.node(v);
    // Round the corners of the nodes
    node.rx = node.ry = 5;
  });

  // Add listeners to the nodes

  zoomToRootNode();
  render(svgGroup, g);
  zoomToRootNode();

  // Adjust nodes size to make it responsive
  var labels_height = [], labels_width = []
  d3.selectAll("g .label foreignObject").each(
    function () {
      labels_height.push(parseInt(d3.select(this).attr("height")));
      labels_width.push(parseInt(d3.select(this).attr("width")));
    }
  );
  var nodes = d3.selectAll("g.node")
                .attr('data-toggle', 'modal')
                .attr('data-target', `#${MODAL_ELEMENT_ID}`)
                .attr('role', 'button')
                .on("click", node_on_click_callback); 
  nodes.select("rect")
      .attr("height", function(d,i){
        return (labels_height[i] || 0) + 20;
      }).attr("width", function(d,i){
        return (labels_width[i] || 0) + 20;
      });
}

// Add nodes and edges from API node data
export function addNode(data, add_cluster=true) {
  if (data.is_queried) {
    root_node = data.id
    var node_class = "queried";
  }
  else {
    var node_class = "non-queried";
  }
  var language_name = LANGUAGE_MAP[data.lang];
  g.setNode(data.id, 
    {
      labelType: "html",
      label: function() {
        var table = document.createElement("table"),
        tr = d3.select(table).append("tr");
        table.setAttribute("id", data.id);
        table.setAttribute("width", "auto");
        table.setAttribute("height", "auto");
        var label_row = tr.append("td").append("div");
        label_row.text(data.label);
        label_row.attr("class", "word_label");
        tr = d3.select(table).append("tr");
        if (language_name != undefined) {
          var lang_row = tr.append("td").append("div");
          lang_row.attr("class", "word_lang");
          lang_row.text(language_name)
        }
        return table;
      },
      class: node_class
    });
  if (add_cluster && language_name != undefined) {
    g.setNode(language_name, {label: language_name, clusterLabelPos: 'top', style: 'fill: #d3d7e8'});
    g.setParent(data.id, language_name);
  }
  data.relative_ids.forEach(element => {
    g.setEdge(element, data.id, {
      curve: d3.curveBasis
    })
  });
}

export function removeNode(node_id, reconect_edges=true) {
  if (g.nodes().includes(node_id)) {
    if (reconect_edges) {
      for (const predecesor_id of g.predecessors(node_id)) {
        g.removeEdge(predecesor_id, node_id);
        for (const successor_id of g.successors(node_id)) {
          g.removeEdge(node_id, successor_id);
          g.setEdge(predecesor_id, successor_id, {
            curve: d3.curveBasis
          })
        }
      } 
    }      
    g.removeNode(node_id);
  }
}


export function zoomFitContent(){
  var svg = d3.select(`#${DAG_ELEMENT_ID}`), svgGroup = svg.select("g");
  var svg_rect = document.getElementById(DAG_ELEMENT_ID).getBoundingClientRect();
  var zoom = getZoom(svgGroup);
  var hRatio = DEFAULT_SCALE/2 * (svg_rect.height / g.graph().height);
  var wRatio = DEFAULT_SCALE/2 * (svg_rect.width / g.graph().width);
  svg.call(zoom);
  zoom.transform(svg, d3.zoomIdentity.scale(1));
  zoom.translateBy(svg, (svg_rect.width*DEFAULT_SCALE- g.graph().width)/2, (svg_rect.height*DEFAULT_SCALE- g.graph().height)/2); 
  zoom.scaleBy(svg, hRatio < wRatio ? hRatio : wRatio);
}

export function zoomToRootNode(){
  if (root_node !== undefined) {
  var svg = d3.select(`#${DAG_ELEMENT_ID}`), svgGroup = svg.select("g");
  var svg_rect = document.getElementById(DAG_ELEMENT_ID).getBoundingClientRect();
  var zoom = getZoom(svgGroup);
  svg.call(zoom);
  zoom.transform(svg, d3.zoomIdentity.scale(1));
  zoom.scaleBy(svg, DEFAULT_SCALE);
    var x = g.node(root_node) === undefined ? 0 : g.node(root_node).x;
    var y = g.node(root_node) === undefined ? 0 : g.node(root_node).y;
    zoom.translateBy(svg, svg_rect.width*DEFAULT_SCALE/2 - x, (svg_rect.height*DEFAULT_SCALE/2)-y);
}
}
