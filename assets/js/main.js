import {i18n, locale_to_flag, locale_to_lang} from './i18n.js';
import {getAncestors, getWords, mergeEquivalentNodes, mergeNode} from './api.js';
import {clearDAG, renderDAG, addNode, zoomFitContent, zoomToRootNode} from './dag.js';


var app = new Vue({ 
  i18n ,
  data: {
    flag: locale_to_flag[i18n.locale],
    query: null,
    graph: {},
    uri_cache: [],
    query_node_ids: new Set(),
    menu_toggled: false
  },
  mounted() {
    if (localStorage.locale) {
      i18n.locale = localStorage.locale;
      this.flag = locale_to_flag[localStorage.locale];
    }
    if (localStorage.menu_toggled) {
      this.menu_toggled = JSON.parse(localStorage.menu_toggled);
    }
  },
  watch: {
    menu_toggled(value) {
        localStorage.menu_toggled = value;
    }
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
    }
  }
}).$mount('#app')


function searchWord(){
  if (app.query !== undefined) {
    var query_node_id = undefined;
    var spinner = $("#loading-spinner-outer");
    spinner.removeAttr("style").css({'height': '100%', 'opacity': '100%'});

    getAncestors(
      app.query.toLowerCase(), 
      locale_to_lang[i18n.locale], 
      function(node) {
        if (query_node_id === undefined) {
          app.query_node_ids.add(node.id);
          query_node_id = node.id;
        }
        app.graph[node.id] = node;
      },
      function(graph, last_node_id){
        spinner.removeAttr("style").css({
          'opacity' : '0%',
          'height' : '0%'
        });
        if ((Object.keys(graph).length == 0) && app.graph[last_node_id] !== undefined) {
          // The query was already in the graph
          app.query_node_ids.add(last_node_id);
        }
        var merged_graph = mergeEquivalentNodes(app.graph);
        if (Object.keys(merged_graph).length > 0) {
          clearDAG();
          Object.values(merged_graph).forEach(node => {
            node.is_queried = (app.query_node_ids.has(node.id));
            addNode(node);
          });
          renderDAG();
        }
        app.graph = merged_graph;
      },
      true,
      app.uri_cache
    );
  }
  return true;
}

$(document).ready(function () {

  $("#clear-dag").click(function(e) {
    app.graph = {};
    app.uri_cache = [];
    app.query_node_ids = new Set();
    clearDAG();
    $('#query-input').val('');
  });

  $('#query-input').focus(
    function(){
        $(this).val('');
    });

  $('#zoom-to-root').click(function(e) {
    e.preventDefault();
    zoomToRootNode();
  });

  $('#zoom-fit-content').click(function(e) {
    e.preventDefault();
    zoomFitContent();
  });

});

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




