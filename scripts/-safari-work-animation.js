$(document).ready(function(){
	$(window).scroll(function() {
		console.log( $(this).scrollTop());
		console.log( $(window).outerWidth());
	});

	// Show Work 
	
	//	Downtime
	if ($(window).width() <= 752) {
		$(function() {
			$('#button-downtime').click(function (){
				$("#work--downtime").css('display', 'block');
				$("#hero--downtime").css('margin-top', '50em');
				$("#card--downtime").css('top', '68.9em');
				$("#work--downtime").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--downtime").removeClass('unanimate-work');
			});
		});
	} else if ($(window).width() <= 1023) {
		$(function() {
			$('#button-downtime').click(function (){
				$("#work--downtime").css('display', 'block');
				$("#hero--downtime").css('margin-top', '2em');
				$("#card--downtime").css('top', '20em');
				$("#work--downtime").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--downtime").removeClass('unanimate-work');
			});
		});
	} else {
		$(function() {
			$('#button-downtime').click(function (){
				$("#work--downtime").css('display', 'block');
				$("#hero--downtime").css('margin-top', '2em');
				$("#card--downtime").css('top', '20.5em');
				$("#work--downtime").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--downtime").removeClass('unanimate-work');
				console.log('large');
			});
		});
	}

	//	Redwood
	if ($(window).width() <= 752) {
		$(function() {
			$('#button-redwood').click(function (){
				$("#work--redwood").css('display', 'block');
				$("#hero--redwood").css('margin-top', '50em');
				$("#card--redwood").css('top', '68.9em');
				$("#work--redwood").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--redwood").removeClass('unanimate-work');
			});
		});
	} else if ($(window).width() <= 1023) {
		$(function() {
			$('#button-redwood').click(function (){
				$("#work--redwood").css('display', 'block');
				$("#hero--redwood").css('margin-top', '2em');
				$("#card--redwood").css('top', '20em');
				$("#work--redwood").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--redwood").removeClass('unanimate-work');
			});
		});
	} else {
		$(function() {
			$('#button-redwood').click(function (){
				$("#work--redwood").css('display', 'block');
				$("#hero--redwood").css('margin-top', '2em');
				$("#card--redwood").css('top', '20.5em');
				$("#work--redwood").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--redwood").removeClass('unanimate-work');
				console.log('large');
			});
		});
	}
	
	//	gon
	if ($(window).width() <= 752) {
		$(function() {
			$('#button-gon').click(function (){
				$("#work--gon").css('display', 'block');
				$("#hero--gon").css('margin-top', '50em');
				$("#card--gon").css('top', '68.9em');
				$("#work--gon").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--gon").removeClass('unanimate-work');
			});
		});
	} else if ($(window).width() <= 1023) {
		$(function() {
			$('#button-gon').click(function (){
				$("#work--gon").css('display', 'block');
				$("#hero--gon").css('margin-top', '2em');
				$("#card--gon").css('top', '20em');
				$("#work--gon").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--gon").removeClass('unanimate-work');
			});
		});
	} else {
		$(function() {
			$('#button-gon').click(function (){
				$("#work--gon").css('display', 'block');
				$("#hero--gon").css('margin-top', '2em');
				$("#card--gon").css('top', '20.5em');
				$("#work--gon").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--gon").removeClass('unanimate-work');
				console.log('large');
			});
		});
	}
	
	//	kate
	if ($(window).width() <= 752) {
		$(function() {
			$('#button-kate').click(function (){
				$("#work--kate").css('display', 'block');
				$("#hero--kate").css('margin-top', '50em');
				$("#card--kate").css('top', '68.9em');
				$("#work--kate").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--kate").removeClass('unanimate-work');
			});
		});
	} else if ($(window).width() <= 1023) {
		$(function() {
			$('#button-kate').click(function (){
				$("#work--kate").css('display', 'block');
				$("#hero--kate").css('margin-top', '2em');
				$("#card--kate").css('top', '20em');
				$("#work--kate").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--kate").removeClass('unanimate-work');
			});
		});
	} else {
		$(function() {
			$('#button-kate').click(function (){
				$("#work--kate").css('display', 'block');
				$("#hero--kate").css('margin-top', '2em');
				$("#card--kate").css('top', '20.5em');
				$("#work--kate").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--kate").removeClass('unanimate-work');
				console.log('large');
			});
		});
	}

	// Hide Work
	$(function() {
		$('.floating-action-button-close').click(function (){
			$(".work--wrapper").addClass('unanimate-work');
			$(".work--wrapper").removeClass('animate-work');
			$('#fabx-button').fadeOut();

			function displayNone(){
				$(".work--wrapper").css('display', 'none');
				$('#fabx-button').removeClass('fabx-appear');
			}
			setTimeout(displayNone, 700);
		});
	});

	$(function() {
		$('.work--footer-link').click(function (){
			$(".work--wrapper").addClass('unanimate-work');
			$(".work--wrapper").removeClass('animate-work');
			$('#fabx-button').fadeOut();

			function displayNone(){
				$(".work--wrapper").css('display', 'none');
				$('#fabx-button').removeClass('fabx-appear');
			}
			setTimeout(displayNone, 700);
		});
	});

	// Hide Fab Button
	$(window).on("scroll", function(){
		if ($(window).width() <= 752){
			if($("body").scrollTop() < 2200){
				$('#fabx-button').fadeOut();

			}else {
				$('#fabx-button').fadeIn();
			}
		} else {
			if($("body").scrollTop() < 1400){
				$('#fabx-button').fadeOut();

			}else {
				$('#fabx-button').fadeIn();
			}
		}
	});

	// Sticky Fab Button
	$(window).on("scroll", function(){
		if ($(window).width() <= 752){
			if($("body").scrollTop() > 2671){
				$('#fabx-button').addClass('fabx-sticky');
				$('#fabx-button').removeClass('fabx-loose');
				$('#fabx-button').css('top', '5.7em');

			} else if($("body").scrollTop() > 2460){
				$('#fabx-button').removeClass('fabx-sticky');
				$('#fabx-button').addClass('fabx-loose');
				$('#fabx-button').css('top', '172.8em');

			} else {
				$('#fabx-button').removeClass('fabx-loose');
				$('#fabx-button').css('top', '19em');
			}
		} else if ($(window).width() <= 1023){
			if($("body").scrollTop() > 1889){
				$('#fabx-button').addClass('fabx-sticky');
				$('#fabx-button').removeClass('fabx-loose');
				$('#fabx-button').css('top', '5.7em');

			}else if($("body").scrollTop() > 1680){
				$('#fabx-button').removeClass('fabx-sticky');
				$('#fabx-button').addClass('fabx-loose');
				$('#fabx-button').css('top', '123.8em');

			} else {
				$('#fabx-button').removeClass('fabx-loose');
				$('#fabx-button').css('top', '19em');
			}
		}	else {
			if($("body").scrollTop() > 1898){
				$('#fabx-button').addClass('fabx-sticky');
				$('#fabx-button').removeClass('fabx-loose');
				$('#fabx-button').css('top', '5.7em');

			}else if($("body").scrollTop() > 1693){
				$('#fabx-button').removeClass('fabx-sticky');
				$('#fabx-button').addClass('fabx-loose');
				$('#fabx-button').css('top', '124.2em');

			} else {
				$('#fabx-button').removeClass('fabx-loose');
				$('#fabx-button').css('top', '19em');
			}
		}
	});
});

$(window).resize(function(){
	// Show Work 
	
	//	Downtime
	if ($(window).width() <= 752) {
		$(function() {
			$('#button-downtime').click(function (){
				$("#work--downtime").css('display', 'block');
				$("#hero--downtime").css('margin-top', '50em');
				$("#card--downtime").css('top', '68.9em');
				$("#work--downtime").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--downtime").removeClass('unanimate-work');
			});
		});
	} else if ($(window).width() <= 1023) {
		$(function() {
			$('#button-downtime').click(function (){
				$("#work--downtime").css('display', 'block');
				$("#hero--downtime").css('margin-top', '2em');
				$("#card--downtime").css('top', '20em');
				$("#work--downtime").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--downtime").removeClass('unanimate-work');
			});
		});
	} else {
		$(function() {
			$('#button-downtime').click(function (){
				$("#work--downtime").css('display', 'block');
				$("#hero--downtime").css('margin-top', '2em');
				$("#card--downtime").css('top', '20.5em');
				$("#work--downtime").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--downtime").removeClass('unanimate-work');
				console.log('large');
			});
		});
	}

	//	Redwood
	if ($(window).width() <= 752) {
		$(function() {
			$('#button-redwood').click(function (){
				$("#work--redwood").css('display', 'block');
				$("#hero--redwood").css('margin-top', '50em');
				$("#card--redwood").css('top', '68.9em');
				$("#work--redwood").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--redwood").removeClass('unanimate-work');
			});
		});
	} else if ($(window).width() <= 1023) {
		$(function() {
			$('#button-redwood').click(function (){
				$("#work--redwood").css('display', 'block');
				$("#hero--redwood").css('margin-top', '2em');
				$("#card--redwood").css('top', '20em');
				$("#work--redwood").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--redwood").removeClass('unanimate-work');
			});
		});
	} else {
		$(function() {
			$('#button-redwood').click(function (){
				$("#work--redwood").css('display', 'block');
				$("#hero--redwood").css('margin-top', '2em');
				$("#card--redwood").css('top', '20.5em');
				$("#work--redwood").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--redwood").removeClass('unanimate-work');
				console.log('large');
			});
		});
	}
	
	//	gon
	if ($(window).width() <= 752) {
		$(function() {
			$('#button-gon').click(function (){
				$("#work--gon").css('display', 'block');
				$("#hero--gon").css('margin-top', '50em');
				$("#card--gon").css('top', '68.9em');
				$("#work--gon").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--gon").removeClass('unanimate-work');
			});
		});
	} else if ($(window).width() <= 1023) {
		$(function() {
			$('#button-gon').click(function (){
				$("#work--gon").css('display', 'block');
				$("#hero--gon").css('margin-top', '2em');
				$("#card--gon").css('top', '20em');
				$("#work--gon").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--gon").removeClass('unanimate-work');
			});
		});
	} else {
		$(function() {
			$('#button-gon').click(function (){
				$("#work--gon").css('display', 'block');
				$("#hero--gon").css('margin-top', '2em');
				$("#card--gon").css('top', '20.5em');
				$("#work--gon").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--gon").removeClass('unanimate-work');
				console.log('large');
			});
		});
	}
	
	//	kate
	if ($(window).width() <= 752) {
		$(function() {
			$('#button-kate').click(function (){
				$("#work--kate").css('display', 'block');
				$("#hero--kate").css('margin-top', '50em');
				$("#card--kate").css('top', '68.9em');
				$("#work--kate").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--kate").removeClass('unanimate-work');
			});
		});
	} else if ($(window).width() <= 1023) {
		$(function() {
			$('#button-kate').click(function (){
				$("#work--kate").css('display', 'block');
				$("#hero--kate").css('margin-top', '2em');
				$("#card--kate").css('top', '20em');
				$("#work--kate").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--kate").removeClass('unanimate-work');
			});
		});
	} else {
		$(function() {
			$('#button-kate').click(function (){
				$("#work--kate").css('display', 'block');
				$("#hero--kate").css('margin-top', '2em');
				$("#card--kate").css('top', '20.5em');
				$("#work--kate").addClass('animate-work');
				$('#fabx-button').fadeIn();
				$('#fabx-button').addClass('fabx-appear');
				$("#work--kate").removeClass('unanimate-work');
				console.log('large');
			});
		});
	}

	// Hide Fab Button
	$(window).on("scroll", function(){
		if ($(window).width() <= 752){
			if($("body").scrollTop() < 2200){
				$('#fabx-button').fadeOut();

			}else {
				$('#fabx-button').fadeIn();
			}
		} else {
			if($("body").scrollTop() < 1400){
				$('#fabx-button').fadeOut();

			}else {
				$('#fabx-button').fadeIn();
			}
		}
	});

	// Sticky Fab Button
	$(window).on("scroll", function(){
		if ($(window).width() <= 752){
			if($("body").scrollTop() > 2671){
				$('#fabx-button').addClass('fabx-sticky');
				$('#fabx-button').removeClass('fabx-loose');
				$('#fabx-button').css('top', '5.7em');

			} else if($("body").scrollTop() > 2460){
				$('#fabx-button').removeClass('fabx-sticky');
				$('#fabx-button').addClass('fabx-loose');
				$('#fabx-button').css('top', '172.8em');

			} else {
				$('#fabx-button').removeClass('fabx-loose');
				$('#fabx-button').css('top', '19em');
			}
		} else if ($(window).width() <= 1023){
			if($("body").scrollTop() > 1889){
				$('#fabx-button').addClass('fabx-sticky');
				$('#fabx-button').removeClass('fabx-loose');
				$('#fabx-button').css('top', '5.7em');

			}else if($("body").scrollTop() > 1680){
				$('#fabx-button').removeClass('fabx-sticky');
				$('#fabx-button').addClass('fabx-loose');
				$('#fabx-button').css('top', '123.8em');

			} else {
				$('#fabx-button').removeClass('fabx-loose');
				$('#fabx-button').css('top', '19em');
			}
		}	else {
			if($("body").scrollTop() > 1898){
				$('#fabx-button').addClass('fabx-sticky');
				$('#fabx-button').removeClass('fabx-loose');
				$('#fabx-button').css('top', '5.7em');

			}else if($("body").scrollTop() > 1693){
				$('#fabx-button').removeClass('fabx-sticky');
				$('#fabx-button').addClass('fabx-loose');
				$('#fabx-button').css('top', '124.2em');

			} else {
				$('#fabx-button').removeClass('fabx-loose');
				$('#fabx-button').css('top', '19em');
			}
		}
	});


});