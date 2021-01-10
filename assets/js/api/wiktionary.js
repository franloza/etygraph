const BASE_URL = "en.wiktionary.org";
const API_ENDPOINT = "https://" + BASE_URL + '/w/api.php';


export function getHTMLContentFromUrl(url, callback) {
    var section = undefined;
    if (url.includes('#')) {
        // Contains language section
        var split_url = url.split('#'), url = split_url[0], section = split_url[1];
        console.log(url);
    }
    var page = url.split('/').slice(-1)[0];
    var wrapper = function (content) {
        var clean_content = cleanHTMLPage(content);
        if (section !== undefined) {
            var section_node = $(`div#section-lang-${section}`, clean_content).clone();
            clean_content.empty();
            clean_content.append(section_node);
        }
        callback(clean_content[0].outerHTML);
    }
    getHTMLPage(page, wrapper);
}


function cleanHTMLPage(page) {
    // Create containers and tags for sections
    var root = $(page);
    var new_page = page;
    var new_root = $(new_page).empty();
    var children = root.children();
    var in_section=false;
    var section_node = undefined;
    var level = 0;
    const header_regex = /H\d/g;
    var section_id = null;
    for (const element of children) {
        var node = $(element); 
        var is_header = node[0].nodeName.match(header_regex) !== null;     
        if (is_header) {
            level = parseInt(node[0].nodeName[1]);
            section_id = $('.mw-headline', node).first().attr('id')
        }
        if (node.is('h2')) {
            if (section_node !== undefined) {
                // New section
                new_root.append(section_node)
            }
            in_section = true;
            section_node = $('<div></div>')
            section_node.attr('id', "section-lang-" + $('.mw-headline', node).first().attr('id'))
        }
        else {
            if (in_section) {
                node.attr('class', 'section-level-' + level);
                if (section_id !== null) {
                    node.attr('id', 'section-' + level + '-' + section_id )
                }
                section_node.append(node);
            }
            else {
                new_root.append(node);
            }
            
        }       
    }
    if (section_node !== undefined) {
        // New section
        new_root.append(section_node)
    }

    // Remove edit sections
    $('.mw-editsection', new_root).remove();

    // Remove conjugations
    $("[id^='section-4-Conjugation']", new_root).remove();

    return new_root
}

function getHTMLPage(page, callback) {
  axios.get(API_ENDPOINT, {
    params: {
      action: 'parse',
      page: page,
      format: "json",
      formatversion: '2',
      prop: 'text',
      origin: '*'
    }
  })
  .then(function (response) {
    var data = {}
    if (response.status == 200) {
        data = response.data;
      }
    callback(data.parse.text)
  })
  .catch(function (error) {
    console.log(error);
  });  
}


//action=parse&page=preguntar&prop=text&formatversion=2&format=json