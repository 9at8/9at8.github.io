$(document).ready((() => {
	'use strict';
	
	var leftButtons = $('#left button');
	var leftA = $('#left a');
	var headerHeight = $(window).height() - 50;
	
	$(document).on('scroll', scrollSet);
	$('#top').css('height', headerHeight);
	
	function scrollSet(event) {
		var scrollPos = $(document).scrollTop();
		
		$(leftA).each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr('href'));
			if (refElement.position().top <= scrollPos + 51 &&
				refElement.position().top + refElement.height() > scrollPos) {
				leftButtons.removeClass('active');
				currLink.addClass('active');
			} else {
				currLink.removeClass('active');
			}
		});
	}

	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 50
			}, 500);
		}
	});

}));