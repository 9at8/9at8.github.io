$(document).ready((() => {
	'use strict';
	
	var leftButtons = $('#left button');
	var leftA = $('#left a');
	leftA.removeAttr('href');
	var headerHeight = $(window).height() - 50;
	
	$(document).on('scroll', scrollSet);
	$('#top').css('height', headerHeight);
	
	function scrollSet(event) {
		var scrollPos = $(document).scrollTop();
		
		$(leftA).each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr('href'));
			if (refElement.position().top <= scrollPos + 50 &&
				refElement.position().top + refElement.height() > scrollPos) {
				leftA.removeClass('active');
				currLink.addClass('active');
			} else {
				currLink.removeClass('active');
			}
		});
		
	}
	
	function scrollTo(ele, time=500) {
		return function () {
			// scroll
			$('html, body').animate({
				scrollTop: $(ele).offset().top - 50
			}, time);
			
			// remove active from other links
			$(leftA).removeClass('active');
			
			// set this as active
			$(this.parent).addClass('active');
		}
	}
	
	$('#home').click(scrollTo('#top'));
	$('#proj').click(scrollTo('#projects'));
	$('#exp').click(scrollTo('#experience'));

}));