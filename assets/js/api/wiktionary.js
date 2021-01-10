const BASE_URL = "https://en.wiktionary.org";
const API_ENDPOINT = BASE_URL + '/w/api.php';

export function getPageFromURL(url) {
    var section = undefined;
    if (url.includes('#')) {
        // Contains language section
        var split_url = url.split('#'), url = split_url[0], section = split_url[1];
    }
    var page = url.split('wiki/').slice(-1)[0];
    return {page: page, section: section}
}

export function getHTMLContentFromPage(page, section, callback, error_callback) {
    var url = BASE_URL + "/wiki/" + page;
    if (section !== undefined) {
        url += "#" + section
    }
    var wrapper = function (content) {
        var clean_content = cleanHTMLPage(content, section);
        callback(url, clean_content[0].outerHTML);
    }
    getHTMLPage(page, wrapper, error_callback);
}


function cleanHTMLPage(page, section) {
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
            if (section === undefined) {
                section_node.append(node);
            }  
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

    // Keep only the section
    if (section !== undefined) {
        var section_node = $(`div#section-lang-${section}`, new_root).clone();
        new_root.empty();
        new_root.append(section_node);
    }

    // Remove edit sections
    $('.mw-editsection', new_root).remove();

    // Remove table of contents
    $('.toc', new_root).remove();

    // Remove blocks before first section
    $(".section-level-2", new_root).remove();

    // Remove conjugations
    $("[id^='section-4-Conjugation']", new_root).remove();

    // Remove declensions
    $("[id^='section-4-Declension']", new_root).remove();

    // Fix relative links and open links in new page
    $("a", new_root).attr('href', function(index,value) {
        if (value !== undefined && value.startsWith('/')) {
            value = BASE_URL + value;
        }
        return value
    }).attr('target', '_blank');

    return new_root
}

function getHTMLPage(page, callback, error_callback) {
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
    error_callback(error)
  });  
}


//action=parse&page=preguntar&prop=text&formatversion=2&format=json