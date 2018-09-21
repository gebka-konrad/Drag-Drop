var DragableManager = (function() {

    var setDragable = function() {
        interact('.resize-drag')
            .draggable({
                onmove: function(event) {
                    var target = event.target,
                        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                    target.style.webkitTransform =
                        target.style.transform =
                        'translate(' + x + 'px, ' + y + 'px)';

                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                    console.log(target.tagName + ' moved to:' + x + '×' + y);
                },
            })
            .resizable({
                edges: { left: true, right: true, bottom: true, top: true }
            })
            .on('resizemove', function(event) {
                var target = event.target,
                    x = (parseFloat(target.getAttribute('data-x')) || 0),
                    y = (parseFloat(target.getAttribute('data-y')) || 0);

                target.style.width = event.rect.width + 'px';
                target.style.height = event.rect.height + 'px';

                x += event.deltaRect.left;
                y += event.deltaRect.top;

                target.style.webkitTransform = target.style.transform =
                    'translate(' + x + 'px,' + y + 'px)';

                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
                console.log(target.tagName + ' resized to:' + event.rect.width + '×' + event.rect.height);
            });
    }

    return {
        SetDragable: setDragable
    }
})();