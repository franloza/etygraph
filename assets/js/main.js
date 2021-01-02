import {i18n, locale_to_flag, locale_to_lang} from './i18n.js';
import {getAncestors, getWords} from './api.js';


var app = new Vue({ 
  i18n ,
  data: {
    flag: locale_to_flag[i18n.locale],
    query: null,
    graph: {}
  },
  mounted() {
    if (localStorage.locale) {
      i18n.locale = localStorage.locale;
      this.flag = locale_to_flag[localStorage.locale];
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
    searchWord: searchWord
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
          query_node_id = node.id;
        }
        if (node.is_queried == undefined || !node.is_queried) {
          node.is_queried = (node.id == query_node_id);
          if (app.graph[node.id] !== undefined) {
            node.is_queried = (node.is_queried || app.graph[node.id].is_queried)
          }
        }
        addNode(node);
        app.graph[node.id] = node;
      },
      function(graph){
        spinner.removeAttr("style").css({
          'opacity' : '0%',
          'height' : '0%'
        });
        console.log(graph)
        if (Object.keys(app.graph).length > 0) {
          renderDAG();
        }
      }
    );
  }
  return true;
}

function isMenuToggled() {
  return JSON.parse($("#wrapper").hasClass("toggled"))
}

$(document).ready(function () {

  // Toggle menu according to state
  var current_is_toggled = isMenuToggled();
  var state_is_toggled = localStorage.menu_toggled;
  if (state_is_toggled === undefined) {
    state_is_toggled = false;
  } 
  else {
    state_is_toggled = JSON.parse(state_is_toggled);
  }

  if ((!state_is_toggled && current_is_toggled) || (state_is_toggled && !current_is_toggled)){
      $("#wrapper").toggleClass("toggled");
    } 
  localStorage.menu_toggled = isMenuToggled();

  // Listeners
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      localStorage.menu_toggled = isMenuToggled();
    });

  $("#clear-dag").click(function(e) {
    app.graph = {};
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




