import {i18n, locale_data} from './i18n.js';
import {getAncestors,getDescendants, getWords, mergeEquivalentNodes} from './api/etytree.js';
import {getPageFromURL, getHTMLContentFromPage} from './api/wiktionary.js';
import {clearDAG, renderDAG, addNode, removeNode, zoomFitContent, zoomToRootNode, DAGisRendered, LANGUAGE_MAP} from './dag.js';


var multiselect = Vue.component('vue-multiselect', window.VueMultiselect.default)

var app = new Vue({ 
  i18n ,
  components: {
    'multiselect': multiselect
  },
  data: {
    // Default variables
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
      'show_clusters': true,
      'filter_languages': false
    },
    modal_node_info : {
      'title': '',
      'wiktionary_link': '#',
      'node_id': '',
      'body': '',
      'found': false,
      'uris': []
    },
    graph_languages: {
      data: {},
      options: [],
      selected: []
    },
    removed_nodes: [],
    modal_node_cache: {},
    loading: false,
    locale_data: locale_data,
    locale: 'en',
  },
  mounted() {
    if (localStorage.locale) {
      this.locale = localStorage.locale;
    }
    i18n.locale = this.locale;
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
    "settings.filter_languages": redrawDAG,
    "graph_languages.selected": redrawDAG,

  },
  methods: {
    changeLocale: function (locale) {
      if (i18n.messages[locale] !== undefined) {
        this.locale = locale;
        i18n.locale = locale;
        localStorage.locale = locale;
      }   
    },
    searchWord,
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
      this.removed_nodes = [];
      clearDAG();
    },
    addDescendants,
    removeNode: function (){
      app.removed_nodes.push(app.modal_node_info.node_id);
      redrawDAG();
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
        app.locale_data[app.locale].lang, 
        function(node) {
          if (query_node_id === undefined) {
            app.query_node_ids.add(node.id);
            query_node_id = node.id;
          }
          if (app.graph.raw === undefined) {
            app.graph.raw = {};
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
      app.loading = false;
    }
  }
  return successful;
}

function addDescendants() {
  app.loading = true;
  var successful = true;
  if (app.modal_node_info.uris !== undefined && app.modal_node_info.uris.size > 0) {
    try {
      getDescendants(
        app.modal_node_info.uris,
        function (node) {
          if (app.graph.raw[node.id] === undefined) {
            app.graph.raw[node.id] = node;
          }
        },
        function (result) {
          var raw_graph =  jQuery.extend(true, { }, app.graph.raw);
          app.graph.merged = mergeEquivalentNodes(raw_graph);
          app.loading = false;
          Vue.nextTick(drawDAG);
        },
        app.uri_cache)
    }
    catch (error) {
      console.error(error);
      successful = false;
      app.loading = false;
    }
  }
  return successful
}

function drawDAG() {
  var graph = (app.settings.merge_equivalent_nodes)? app.graph.merged : app.graph.raw;
  if (Object.keys(graph).length > 0) {
    clearDAG();
    var lang_to_node = {}
    var selected_langs = app.graph_languages.selected.map(function(elem) {return elem.id});
    var filter_languages = (selected_langs.length > 0) && (app.settings.filter_languages);
    Object.values(graph).forEach(node => {
      node.is_queried = (app.query_node_ids.has(node.id));
      if (lang_to_node[node.lang] === undefined) {
        lang_to_node[node.lang] = [node.id];
      } else {
        lang_to_node[node.lang].push(node.id);
      }
      if (app.graph_languages.data[node.lang] === undefined) {
        app.graph_languages.data[node.lang] = {name: LANGUAGE_MAP[node.lang], id: node.lang}
      }
      var show_clusters = app.settings.show_clusters;
      if (filter_languages) {
        show_clusters = show_clusters && selected_langs.includes(node.lang);
      }
      if (app.removed_nodes.includes(node.id)) {
          show_clusters = false;
      }
      addNode(node, show_clusters);
    });
    app.removed_nodes.forEach(node_id => { 
        removeNode(node_id);
    });
    if (filter_languages) {
      var nodes_to_keep = []
      app.graph_languages.selected.forEach(lang => {
        nodes_to_keep = nodes_to_keep.concat(lang_to_node[lang.id])
      });
      app.query_node_ids.forEach(node_id => {
        if (!nodes_to_keep.includes(node_id)) {
          nodes_to_keep.push(node_id);
        }
      });
      Object.values(graph).forEach(node => { 
        if (!nodes_to_keep.includes(node.id)) {
          removeNode(node.id);
        }
      });
    }

    // Languages Dropdown
    var languages_options = [];
    for (const [key,value] of Object.entries(app.graph_languages.data)) {
      languages_options.push(value)
    } 
    Vue.set(app.graph_languages, 'options', languages_options);

    renderDAG(function (node_id) {
      console.log(app.graph_languages);
      
      // Get contents of modal window
      var node = graph[node_id];
      var loading_message = i18n.t('message.loading') + "...";
      var error_message = i18n.t('message.info_not_available');
      app.modal_node_info.title = node['label'];
      app.modal_node_info.uris = node['uris'];
      app.modal_node_info.node_id = node['id']
      var section = undefined;
      if(node.wiktionary_link === undefined) {
        // "Nos tiramos el triple" (Spanish expression for "Try a three-point shoot". Meaning: Give a try) 
        var page = node.label;
      } else {
        var page_info = getPageFromURL(node.wiktionary_link);
        var page = page_info.page;
        section = page_info.section;
      }
      app.modal_node_info.body = loading_message;

      var callback = function(url, text) {
        app.modal_node_info.wiktionary_link = url;
        app.modal_node_info.body = text
        app.modal_node_cache[String([page,section])] = {url: url, text:text}
        app.modal_node_info.found = true;
      };

      // Look up in the cache
      var node_cache = app.modal_node_cache[String([page,section])];
      if (node_cache !== undefined) {
        callback(node_cache.url, node_cache.text)
      }
      else {
        getHTMLContentFromPage(page, section, callback,
          function(error) {
            app.modal_node_info.body = error_message;
            app.modal_node_info.wiktionary_link = undefined;
            app.modal_node_info.found = false;
          }) 
      } 
    });
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
              getWords(qry.toLowerCase(), app.locale_data[app.locale].lang, function(data) {
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






