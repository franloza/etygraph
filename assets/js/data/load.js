import {getEtymologyLanguages} from './etymology_languages.js';

export function loadLanguageMap() {
    var map = {};
    // Wiktionary data
    d3.text(`./assets/data/language_codes.csv`, function(error, rows){
        if (error) {
            throw error;
        }
        var rows = d3.dsvFormat(";").parse(rows);
        rows.forEach(function(line) {
            var language_code = line['code'];
            var language_name = line['canonical name'];
            map[language_code] = language_name;
        });
    });
    // Enrich with etymology codes
    for (const [key, value] of Object.entries(getEtymologyLanguages())) {
        map[key.toLowerCase()] = value.canonicalName;
      };

    // Enrich with ISO codes
    d3.text(`./assets/data/language_codes_iso.csv`, function(error, rows){
      if (error) {
        throw error;
      }
      var rows = d3.dsvFormat(",").parse(rows);
      rows.forEach(function(line) {
        var codes = []
        if  (line['alpha3-b'] != '') {
          codes.push(line['alpha3-b']);
        }
        if  (line['alpha3-t'] != '') {
          codes.push(line['alpha3-t']);
        }
        if  (line['alpha2'] != '') {
          codes.push(line['alpha2']);
        }
        var key = undefined;
        codes.forEach(function (code) {
          if (map[code] !== undefined) {
            key = code;
          }
        });
        codes.forEach(function (code) {
          if (key === undefined) {
            map[code] = line['English'];
          }
          else {
            map[code] = map[key];
          } 
        });      
      });
    });
    return map;
  }