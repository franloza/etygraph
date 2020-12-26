
const DAG_ELEMENT_ID = 'dag-panel'
const DEFAULT_SCALE = 1;

function initDAG() {
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

function renderDAG() {

  // Create the renderer
  var render = new dagreD3.render();

  // Set up an SVG group so that we can translate the final graph.
  var svg_element = document.getElementById(DAG_ELEMENT_ID);
  var svg_rect = svg_element.getBoundingClientRect(); // get the bounding rectangle
  var svg = d3.select(`#${DAG_ELEMENT_ID}`)
              .attr("preserveAspectRatio", "xMinYMin meet")
              .attr("viewBox", "0 0 " + svg_rect.width + " " + svg_rect.height);
  if (initial_render){
    var svgGroup = svg.append('g');
  } else {
    var svgGroup = svg.select('g');
  }

  g.nodes().forEach(function(v) {
    var node = g.node(v);
    // Round the corners of the nodes
    node.rx = node.ry = 5;
  });

  render(svgGroup, g);

  // Zoom
  var zoom = d3.zoom()
      .scaleExtent([0.02, 8])
    	.on("zoom", function() {
        svgGroup.attr("transform", d3.event.transform)
      });
  svg.call(zoom);

  zoom.transform(svg, d3.zoomIdentity.scale(1));
  zoom.scaleBy(svg, DEFAULT_SCALE);
  zoom.translateBy(svg, svg_rect.width*DEFAULT_SCALE/2 - g.node(root_node).x,   20*DEFAULT_SCALE); 
  initial_render = false;
}

g = initDAG()
var root_node = undefined;
var initial_render = true;

// Add nodes and edges from API node data
function addNode(data, is_root=False) {
  if (is_root) {
    root_node = data.id
  }
  g.setNode(data.id, {label: data.label})
  data.relatives.forEach(element => {
    g.setEdge(element, data.id, {})
  });
  renderDAG()
}
