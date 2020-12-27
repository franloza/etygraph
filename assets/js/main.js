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
    var root_node = undefined;
    getAncestors(app.query.toLowerCase(), locale_to_lang[i18n.locale], function(node) {
      var is_root = root_node === undefined;
      root_node = node.id;
      addNode(node, is_root)
      app.graph[node.id] = node;
    });
  }
  return true;
}

$(document).ready(function () {

  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
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




