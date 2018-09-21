var SiteCreator = (function () {

    var getElement = function(type, actualParent) {
        var current;
        var elements = {
            'cover': function() {
                current = document.createElement('div');
                current.style.width = "210mm";
                current.style.height = "297mm";
                current.style.position = 'absolute';
                current.className = 'resize';
                actualParent.appendChild(current);
                return current;
            },
            'PDF': function() {
                current = $("body")[0];
                return current;
            },
            'rectangle': function() {
                current = document.createElement('div');
                current.className = 'resize-drag';
                current.style.position = 'absolute';
                actualParent.appendChild(current);
                return current;
            },
            'text': function() {
                current = document.createElement('div');
                var el2 = document.createElement('div');
                el2.className = 'resize-drag';
                el2.style.position = 'absolute';
                el2.style.left = '-50px';
                el2.style.bottom = '55px';
                el2.appendChild(current);
                actualParent.appendChild(el2);
                return current;
            },
            'list': function() {
                current = document.createElement('ul');
                current.className = 'resize-drag';
                current.style.position = 'absolute';
                actualParent.appendChild(current);
                return current;
            },
            'item': function() {
                current = document.createElement('li');
                current.className = 'resize-drag';
                actualParent.appendChild(current);
                return current;
            },
            'polygon': function() {
                current = document.createElement('svg');
                current.className = 'resize-drag';
                current.style.width = "80px";
                current.style.height = "80px";
                var el2 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                el2.id = 'poly';
                current.appendChild(el2);
                current.style.position = 'absolute';
                actualParent.appendChild(current);
                return current;
            },
            'point': function() {
                return;
            },
            'image': function() {
                current = document.createElement('img');
                current.className = 'resize-drag';
                actualParent.appendChild(current);
                return current;
            },
            'line': function() {
                current = document.createElement('hr');
                current.style.color = '#333333';
                current.style.background = '#333333';
                current.className = 'resize-drag';
                actualParent.appendChild(current);
                return current;
            },
            'default': function() {
                current = document.createElement(type);
                current.className = 'resize-drag';
                current.style.position = 'absolute';
                actualParent.appendChild(current);
                return current;
            }
        };

        return (elements[type] || elements['default'])();
    };

    var setAttribute = function (el, name, val) {
        var obj = $(el);

        var isNumber = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };

        var attributes = {
            'background-image': function() {
                val = "url('./Content/" + val + "')";
                obj.css("background-size", "contain");
                attributes['default']();
            },
            'top': function () {
                obj.css('position', 'absolute');
                attributes['default']();
            },
            'weight': function () {
                name = 'font-' + name;
                attributes['default']();
            },
            'size': function() {
                name = 'font-' + name;
                attributes['default']();
            },
            'value': function () {
                obj.html(val);
            },
            'file': function() {
                el.style.position = 'absolute';
                el.src = "./Content/" + val;
            },
            'rotate': function() {
                obj.css('-ms-transform', 'rotate(' + val + 'deg)');
                obj.css('-webkit-transform', 'rotate(' + val + 'deg)');
                obj.css('transform', 'rotate(' + val + 'deg)');
            },
            'default': function() {
                if (isNumber(val)) {
                    obj.css(name, val + "px");
                } else {
                    obj.css(name, val);
                }
            }
        };

        (attributes[name] || attributes['default'])();
    };

    var handlePointsElements = function(json) {
        var points = '';
        _.each(json.elements, function (ele) {
            points = points + ele.x + "," + ele.y + " ";
        });
        var r = document.getElementById('poly');
        r.setAttribute("points", points);
    };

    var createSite = function(json, actualParent) {
        var el;

        _.each(json, function(value, name) {
            if (name == 'type') {
                el = getElement(value, actualParent);
            } else if (name == 'elements') {
                if (el.tagName == 'SVG') {
                    handlePointsElements(json);
                    return;
                }
                _.each(json.elements, function(ele) {
                    createSite(ele, el);
                });
            } else {
                setAttribute(el, name, value);
            }
        });
    };

    return {
        CreateSite: createSite
}
})();
