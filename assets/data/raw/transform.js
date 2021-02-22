import {getEtymologyLanguages} from './etymology_languages.js';

export function transformLanguageMap() {
    var map = {};
    // Wiktionary data
    d3.text(`./assets/data/raw/language_codes.csv`, function(error, rows){
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
    d3.text(`./assets/data/raw/language_codes_iso.csv`, function(error, rows){
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
    // Enrich with ISO 639-3 Codes
    d3.text(`./assets/data/raw/language_codes_iso_639.csv`, function(error, rows){
      if (error) {
          throw error;
      }
      var rows = d3.dsvFormat(";").parse(rows);
      rows.forEach(function(line) {
          var language_code = line['Id'];
          var language_name = line['Inverted_Name'];
          if (map[language_code] === undefined){
            map[language_code] = language_name;
          }      
      });
  });
    return map;
  }