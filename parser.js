function readLine(el, selector) {
    return el.find(selector)[0].innerText
}

function hasNoClass(i, el) {
    return !$(el).attr('class'); 
}

function getFullDescr(el) {
    var body = $(el).find('p, ul').filter(hasNoClass);
}

function make(el){
    return {
        'id': readLine(el, '.r-itemid'),
        'title': readLine(el, '.item-title'),
        'descr': {
            'short':   readLine(el, '.pickup'),
            'full':  '',
        },
        'isSpecial': Boolean(el.find('.r-special').length),
        'tags': readLine(el, '.tags')
    }
}

// == Tests

// make($($0));

var items = $('#itmlist');
var firstItem = items.find('.textbox:first'); 

console.log(getFullDescr(firstItem));
