$(document).ready(function($) {

	"use strict";

	// Legacy theme initializers are disabled because the React / GSAP homepage
	// is rendering the static content directly. Let the React tree own DOM.
	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();

	var burgerMenu = function() {
		return;
	};
	burgerMenu();

});

