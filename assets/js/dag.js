
const DAG_ELEMENT_ID = 'dag-panel'
const DEFAULT_SCALE = 0.8;

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
  
  // Center the graph
  var xCenterOffset = (svg_rect.width - g.graph().width) / 2;
  svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
  svg.attr("height", g.graph().height + 40);

  // Zoom
  var zoom = d3.zoom()
      .scaleExtent([0.02, 8])
    	.on("zoom", function() {
        svgGroup.attr("transform", d3.event.transform)
      });
  svg.call(zoom);

  // Only initial render
  if (initial_render) {
    zoom.transform(svg, d3.zoomIdentity.scale(1));
    zoom.scaleBy(svg, DEFAULT_SCALE);
    zoom.translateBy(svg, (svg_rect.width*DEFAULT_SCALE/2) - g.node(root_node).x + 200,   (svg_rect.height*DEFAULT_SCALE/2) - (g.node(root_node).y)); 
    initial_render = false;
  }
  else {
    // // Center graph on root node
    //   svg.transition()
    //     .delay(500)
    //     .duration(700)
    //     .call(zoom.transform, function() {
    //       try {
    //         d3.zoomIdentity.translate((svg_rect.width/2)-g.node(root_node).x, (svg_rect.height/2)-g.node(root_node).y);
    //       } catch {
             
    //       };
    //     });
   }
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
