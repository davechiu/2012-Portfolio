// delay inbetween slides in slideshow, in milliseconds
var slideShowDelay = 12500;

// initial slideshow trigger
var t = setTimeout(function(){
			portfolio.next();
		},slideShowDelay);

// array of photos to display in portfolio
// landscape orientation works best due to cover/stretch presentation of images
var photos = [
	'https://dl.dropbox.com/sh/qtg3abjy10eb80i/4t5cS8G8De/2012TourDeFrance-17.jpg',
	'https://dl.dropbox.com/sh/qtg3abjy10eb80i/AoISk8GvOg/2012TourDeFrance-23.jpg',
	'https://dl.dropbox.com/sh/qtg3abjy10eb80i/s-3B7iQAk2/2012TourDeFrance-45.jpg',
	'https://dl.dropbox.com/sh/qtg3abjy10eb80i/ie8-i-DZwa/2012TourDeFrance-50.jpg',
	'https://dl.dropbox.com/sh/qtg3abjy10eb80i/_qO_-9stDq/2012TourDeFrance-53.jpg',
	'https://dl.dropbox.com/sh/qtg3abjy10eb80i/AwvxvdjrAl/2012TourDeFrance-64.jpg',
	'https://dl.dropbox.com/sh/qtg3abjy10eb80i/jdBLaUWV0l/2012TourDeFrance-59.jpg',
	'https://dl.dropbox.com/sh/qtg3abjy10eb80i/0Hvx75q-ih/2012TourDeFrance-58.jpg'
]

// portfolio presentation and slideshow controller
var portfolio = {
	'slideshow': true,
	'current': 0,
	'next' : function() {
		this.current = (this.current==photos.length-1)?0:++this.current;
		this.show(this.current);
	},
	'prev' : function() {
		this.current = (this.current==0)?(photos.length-1):--this.current;
		this.show(this.current);
	},
	'show' : function(_index) {
		clearTimeout(t);
		$('#viewer').anystretch(photos[_index], {speed: 500});
		this.current = _index;
		this.step();
	},
	'play' : function() {
		this.slideshow = true;
		this.step();
	},
	'pause' : function() {
		this.slideshow = false;
		this.step();
	},
	'fullscreen' : function() {
		if (window.fullScreenApi.supportsFullScreen) {
			window.fullScreenApi.requestFullScreen($('section#main').get(0));

			$('section#main').get(0).addEventListener(fullScreenApi.fullScreenEventName, function() {
				if (fullScreenApi.isFullScreen()) {
					// in full screen, sweet!
					$('section#main').addClass('fullscreen');
				} else {
					// exited, cleanup
					$('section#main').removeClass('fullscreen');
				}
			}, true);
		}
	},
	'toggle' : function() {
		if($('#playpause a').hasClass('pause')){
			this.pause();
			$('#playpause a').removeClass('pause').addClass('play').text('play');
		} else {
			this.play();
			$('#playpause a').removeClass('play').addClass('pause').text('pause');
		}
	},
	'step' : function() {
		if (this.slideshow) {
			t = setTimeout(function(){
				portfolio.next();
			},slideShowDelay);
		} else {
			clearTimeout(t);
		}
	}
}

$(function(){
	// preload photos into cache
	$(photos).preload();

	// present first photo
	portfolio.show(0);

	// update current year in copyright footer, incase you don't get around to updating this in a timely manner
	$('#currYear').text(new Date().getFullYear());

	// keyboard shortcuts
	$(window).keydown(function(e){
		switch(e.keyCode) {
			case 32:
				// space
				portfolio.toggle();
				break;
			case 37:
				// left
				portfolio.prev();
				break;
			case 38:
				// up
				portfolio.prev();
				break;
			case 39:
				// right
				portfolio.next();
				break;
			case 40:
				// down
				portfolio.next();
				break;
			case 70:
				// f
				portfolio.fullscreen();
				break;
			case 74:
				// j
				portfolio.prev();
				break;
			case 75:
				// k
				portfolio.next();
				break;
		}
	});

	// onscreen slideshow navigation controls
	$('#next a').on('click',function(e){
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		portfolio.next();
	});
	$('#prev a').on('click',function(e){
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		portfolio.prev();
	});
	$('#playpause a').on('click',function(e){
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		portfolio.toggle();
	});

	// swipe controls for slideshow navigation
	$('#main, #viewer').swipe({
		swipeLeft: function() {
			portfolio.next();
		},
		swipeRight: function() {
			portfolio.prev();
		}
	});

	$('a#fullscreen').on('click',function(e){
		e.preventDefault();
		portfolio.fullscreen();
	})
});