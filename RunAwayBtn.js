(function (exports, $) {
    var RunAwayBtn = function (opts) {
        this.xMargin = opts.xMargin || 0;
        this.yMargin = opts.yMargin || 0;

        this.$el = opts.$el || $('<div />');
        this.duration = opts.duration || 100;

        this.jumpCount = 0;
        this.listeners = [];

        this.initEl();
        this.initListeners();

        this.put(0, 0);
    };

    RunAwayBtn.prototype.initEl = function () {
        this.$el.css({
            position: 'absolute'
        });
    };

    RunAwayBtn.prototype.initListeners = function () {
        var self = this;
        this.$el.on('mouseover touchstart', function () {
            self.away();
        });
    };

    RunAwayBtn.prototype.away = function () {
        var $window = $(window);

        var x = this.x;
        var y = this.y;

        var xMargin = this.xMargin;
        var yMargin = this.yMargin;

        var windowWidth = $window.width();
        var windowHeight = $window.height();

        var onLeft = x < windowWidth / 2;
        var onTop = y < windowHeight / 2;

        var length = Math.min(windowWidth, windowHeight) / 2;

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

        this.jumpTo(x, y);
    };

    RunAwayBtn.prototype.jumpTo = function (x, y) {
        var $el = this.$el;
        var duration = this.duration;

        var self = this;
        $el.animate({
            left: x + 'px',
            top: y + 'px'
        }, duration, function () {
            self.x = x;
            self.y = y;
            self.jumpCount++;
            self.emit('jump');
            self.emit('jump:' + self.jumpCount);
        });
    };

    RunAwayBtn.prototype.put = function (x, y) {
        var $el = this.$el;
        $el.css({ left: x + 'px', top: y + 'px' });
        this.x = x;
        this.y = y;
    };

    RunAwayBtn.prototype.on = function (name, fn) {
        this.listeners.push({
            name: name,
            fn: fn
        });
    };

    RunAwayBtn.prototype.emit = function (name) {
        $.each(this.listeners, function (index, e) {
            if (e.name != name) {
                return;
            }

            setTimeout(e.fn);
        });
    };

    exports.RunAwayBtn = RunAwayBtn;

})(window, jQuery);
