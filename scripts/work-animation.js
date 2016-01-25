$(document).ready(function(){

	$('.imprint').fadeOut(0);
	
	// Show Work 

	//	Downtime
	$(function () {
		$('#button-downtime').click(switchWork);
		$('#button-downtime').click(function (){
			$('.project-button').removeClass('loading');
			$(this).addClass('loading');
			function workReveal(){
				$("#work--downtime").css('display', 'block');
				$("#work--downtime").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--downtime").removeClass('unanimate-work');
			}
			setTimeout(workReveal, 2000);
		});
	});

	//	Redwood
	$(function () {
		$('#button-redwood').click(switchWork);
		$('#button-redwood').click(function (){
			$('.project-button').removeClass('loading');
			$(this).addClass('loading');
			function workReveal(){
				$("#work--redwood").css('display', 'block');
				$("#work--redwood").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--redwood").removeClass('unanimate-work');
			}
			setTimeout(workReveal, 2000);
		});
	});

	//	gon
	$(function () {
		$('#button-gon').click(switchWork);
		$('#button-gon').click(function (){
			$('.project-button').removeClass('loading');
			$(this).addClass('loading');
			function workReveal(){
				$("#work--gon").css('display', 'block');
				$("#work--gon").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--gon").removeClass('unanimate-work');
			}
			setTimeout(workReveal, 2000);
		});
	});

	//	kate
	$(function () {
		$('#button-kate').click(switchWork);
		$('#button-kate').click(function (){
			$('.project-button').removeClass('loading');
			$(this).addClass('loading');
			function workReveal(){
				$("#work--kate").css('display', 'block');
				$("#work--kate").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--kate").removeClass('unanimate-work');
			}
			setTimeout(workReveal, 2000);
		});
	});
	
	//	steve
	$(function () {
		$('#button-steve').click(switchWork);
		$('#button-steve').click(function (){
			$('.project-button').removeClass('loading');
			$(this).addClass('loading');
			function workReveal(){
				$("#work--steve").css('display', 'block');
				$("#work--steve").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--steve").removeClass('unanimate-work');
			}
			setTimeout(workReveal, 2000);
		});
	});

	//	amore
	$(function () {
		$('#button-amore').click(switchWork);
		$('#button-amore').click(function (){
			$('.project-button').removeClass('loading');
			$(this).addClass('loading');
			function workReveal(){
				$("#work--amore").css('display', 'block');
				$("#work--amore").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--amore").removeClass('unanimate-work');
			}
			setTimeout(workReveal, 2000);
		});
	});
	
	//	photography
	$(function () {
		$('#button-photography').click(switchWork);
		$('#button-photography').click(function (){
			$('.project-button').removeClass('loading');
			$(this).addClass('loading');
			function workReveal(){
				$("#work--photography").css('display', 'block');
				$("#work--photography").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--photography").removeClass('unanimate-work');
			}
			setTimeout(workReveal, 2000);
		});
	});
	
	//	branding
	$(function () {
		$('#button-branding').click(switchWork);
		$('#button-branding').click(function (){
			$('.project-button').removeClass('loading');
			$(this).addClass('loading');
			function workReveal(){
				$("#work--branding").css('display', 'block');
				$("#work--branding").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--branding").removeClass('unanimate-work');
			}
			setTimeout(workReveal, 2000);
		});
	});

	// Hide Work
	function hideWork(e){
		$(".work--wrapper").addClass('unanimate-work');
		$(".work--wrapper").removeClass('animate-work');
		$('#fabx-button').fadeOut();
		$('.project-button').removeClass('loading');

		function displayNone(){
			$(".work--wrapper").css('display', 'none');
			$('#fabx-button').removeClass('fabx-appear');
		}
		setTimeout(displayNone, 700);
	}

	// Switch Work
	function switchWork(e){
		function switchDelay(){
			$(".work--wrapper").fadeOut("slow", function(){
				$(".work--wrapper").addClass('unanimate-work');
				$(".work--wrapper").removeClass('animate-work');
			});
			$('#fabx-button').fadeOut();
			$('#fabx-button').removeClass('fabx-appear');
		}
		setTimeout(switchDelay, 600);
	}

	$(function() {
		$('.floating-action-button-close, .work--footer-link').click(hideWork);
	});
	
	// Show Impressum
	$(function() {
		$('.imprint-link').click(function() {
			$('.imprint').fadeIn();
		});
	});
	
	// Close Impressum
	$(function() {
		$('.imprint--header-link').click(function() {
			$('.imprint').fadeOut();
		});
	});

});
