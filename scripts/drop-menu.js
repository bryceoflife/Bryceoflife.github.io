/*jslint browser: true*/
/*global $, jQuery, alert*/

// On Page load

$(document).ready(function () {
	var menu = document.getElementById('menu'),
		WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

	function toggleHorizontal() {
		[].forEach.call(
			document.getElementById('menu').querySelectorAll('.custom-can-transform'),
			function(el){}
		);
	};

	function toggleMenu() {
		// set timeout so that the panel has a chance to roll up
		// before the menu switches states
		if (menu.classList.contains('open')) {
			setTimeout(toggleHorizontal, 500);
		}
		else {
			toggleHorizontal();
		}
		menu.classList.toggle('open');
		document.getElementById('toggle').classList.toggle('x');
	};

	function closeMenu() {
		if (menu.classList.contains('open')) {
			toggleMenu();
		}
	}

	document.getElementById('toggle').addEventListener('click', function (e) {
		toggleMenu();
	});

	document.getElementById('about').addEventListener('click', closeMenu);
	document.getElementById('work').addEventListener('click', closeMenu);
	document.getElementById('films').addEventListener('click', closeMenu);
	document.getElementById('contact').addEventListener('click', closeMenu);

	window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
});
