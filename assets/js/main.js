import {i18n, locale_to_flag, locale_to_lang} from './i18n.js';
import {getAncestors, getWords, mergeEquivalentNodes} from './api.js';
import {clearDAG, renderDAG, addNode, zoomFitContent, zoomToRootNode, DAGisRendered} from './dag.js';

var app = new Vue({ 
  i18n ,
  data: {
    flag: locale_to_flag[i18n.locale],
    query: '',
    graph: {
      raw: {},
      merged: {}
    },
    uri_cache: [],
    query_node_ids: new Set(),
    menu_toggled: false,
    settings: {
      'merge_equivalent_nodes': true,
      'show_clusters': true
    },
    loading: false
  },
  mounted() {
    if (localStorage.locale) {
      i18n.locale = localStorage.locale;
      this.flag = locale_to_flag[localStorage.locale];
    }
    if (localStorage.menu_toggled) {
      this.menu_toggled = JSON.parse(localStorage.menu_toggled);
    }
    if (localStorage.settings) {
      this.settings = {
        ...this.settings,
        ...JSON.parse(localStorage.settings)
      };
    }
  },
  watch: {
    menu_toggled: function (value) {
        localStorage.menu_toggled = value;
    },
    "settings": {
      handler(value) {
        localStorage.settings = JSON.stringify(value);
      },
      deep: true
    },
    "settings.merge_equivalent_nodes": redrawDAG,
    "settings.show_clusters": redrawDAG,

  },
  methods: {
    changeLocale: function (locale) {
      if (i18n.messages[locale] !== undefined) {
        i18n.locale = locale;
        this.flag = locale_to_flag[locale];
        localStorage.locale = locale;
      }   
    },
    searchWord: searchWord,
    toggleMenu: function () {
      this.menu_toggled = !this.menu_toggled
    },
    zoomToRootNode,
    zoomFitContent,
    clear:  function () {
      this.graph = {};
      this.uri_cache = [];
      this.query_node_ids = new Set();
      this.query = '';
      clearDAG();
    }
  }
}).$mount('#app')

function searchWord(){
  app.loading = true;
  var successful = true;
  if (app.query !== undefined) {
    var query_node_id = undefined;
    try {
      getAncestors(
        app.query.toLowerCase(), 
        locale_to_lang[i18n.locale], 
        function(node) {
          if (query_node_id === undefined) {
            app.query_node_ids.add(node.id);
            query_node_id = node.id;
          }
          app.graph.raw[node.id] = node;
        },
        function(graph, last_node_id){
          if ((Object.keys(graph).length == 0) && app.graph.raw[last_node_id] !== undefined) {
            // The query was already in the graph
            app.query_node_ids.add(last_node_id);
          }
          var raw_graph =  jQuery.extend(true, { }, app.graph.raw);
          app.graph.merged = mergeEquivalentNodes(raw_graph);
          app.loading = false;
          Vue.nextTick(drawDAG);
        },
        true,
        app.uri_cache
      );
    } catch (error) {
      console.error(error);
      successful = false;
    }
  }
  //app.loading = false;
  return successful;
}

function drawDAG() {
  var graph = (app.settings.merge_equivalent_nodes)? app.graph.merged : app.graph.raw;
  if (Object.keys(graph).length > 0) {
    clearDAG();
    Object.values(graph).forEach(node => {
      node.is_queried = (app.query_node_ids.has(node.id));
      addNode(node, app.settings.show_clusters);
    });
    renderDAG();
  }
}

function redrawDAG() {
  if (DAGisRendered()) {
    drawDAG();
  }
}

$(document).ready(function () {

  $('.advancedAutoComplete').autoComplete({
    resolver: 'custom',
    autoFocus: true,
    minLength: 4,
    noResultsText: i18n.t('message.no_results'),
    events: {
        search: function (qry, callback) {
            if (qry.trim().split(' ')[0].length >= 4) {
              getWords(qry.toLowerCase(), locale_to_lang[i18n.locale], function(data) {
                callback(data.map(x => {return x.word}));
              });
          }
        },
    }
  }).on( "autocomplete.select", function (evt, item)  {
      app.query = item;
      searchWord(evt)
  });
  
});






