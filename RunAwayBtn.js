(function (exports, $) {
    var RunAwayBtn = function (opts) {
        var $el = opts.$el;

        var xMargin = opts.xMargin || 0;
        var yMargin = opts.yMargin || 0;

        var $window = $(window);
        var x = 0;
        var y = 0;

        $el.css({
            position: 'absolute'
        });

        $el.on('mouseover touchstart', function () {
            var windowWidth = $window.width();
            var windowHeight = $window.height();

            var onLeft = x < windowWidth / 2;
            var onTop = y < windowHeight / 2;

            var length = Math.min(windowWidth, windowHeight) / 2;
            var duration = 100;

            var rad = Math.random() * Math.PI / 2;
            if (onTop && onLeft) {
                rad += Math.PI * 0 / 2;
            } else if (onTop && !onLeft) {
                rad += Math.PI * 1 / 2;
            } else if (!onTop && !onLeft) {
                rad += Math.PI * 2 / 2;
            } else if (!onTop && onLeft) {
                rad += Math.PI * 3 / 2;
            }

            x += Math.cos(rad) * length;
            y += Math.sin(rad) * length;

            x = Math.max(x, xMargin);
            x = Math.min(x, windowWidth - xMargin);
            y = Math.max(y, yMargin);
            y = Math.min(y, windowHeight - yMargin);

            $el.animate({
                left: x + 'px',
                top: y + 'px'
            }, duration);
        });

        $el.css({ left: x + 'px', top: y + 'px' });
    };

    exports.RunAwayBtn = RunAwayBtn;

})(window, jQuery);
