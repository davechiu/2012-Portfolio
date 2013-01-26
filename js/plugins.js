/* paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/ */
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

/* make it safe to use console.log always */
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

/* image preloader */
(function ($) {
	$.fn.preload = function() {
		this.each(function(){
			(new Image()).src = this;
		});
	};
})(jQuery);

/* wrapper for touchevents */
(function ($) {
    $.fn.swipe = function (options) {
        var defaults = {
            threshold: {
                x: 30,
                y: 10
            },
            swipeLeft: function () {
                alert('swiped left')
            },
            swipeRight: function () {
                alert('swiped right')
            }
        };
        var options = $.extend(defaults, options);
        if (!this) return false;
        return this.each(function () {
            var me = $(this)
            var originalCoord = {
                x: 0,
                y: 0
            }
            var finalCoord = {
                x: 0,
                y: 0
            }

            function touchStart(event) {
                originalCoord.x = event.targetTouches[0].pageX
                originalCoord.y = event.targetTouches[0].pageY
            }

            function touchMove(event) {
                event.preventDefault();
                finalCoord.x = event.targetTouches[0].pageX
                finalCoord.y = event.targetTouches[0].pageY
            }

            function touchEnd(event) {
                var changeY = originalCoord.y - finalCoord.y
                if (changeY < defaults.threshold.y && changeY > (defaults.threshold.y * -1)) {
                    changeX = originalCoord.x - finalCoord.x
                    if (changeX > defaults.threshold.x) {
                        defaults.swipeLeft()
                    }
                    if (changeX < (defaults.threshold.x * -1)) {
                        defaults.swipeRight()
                    }
                }
            }

            function touchStart(event) {
                originalCoord.x = event.targetTouches[0].pageX
                originalCoord.y = event.targetTouches[0].pageY
                finalCoord.x = originalCoord.x
                finalCoord.y = originalCoord.y
            }

            function touchCancel(event) {}
            this.addEventListener("touchstart", touchStart, false);
            this.addEventListener("touchmove", touchMove, false);
            this.addEventListener("touchend", touchEnd, false);
            this.addEventListener("touchcancel", touchCancel, false);
        });
    };
})(jQuery);