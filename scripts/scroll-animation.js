$(document).ready(function() {

	//	Drawing Animation
	//	$(".path").css("stroke-dashoffset",$newUnit - $offsetUnit);

	var path = document.querySelector('.path');
	var length = path.getTotalLength();

	//variable for the 'stroke-dashoffset' unit
	var $dashOffset = $(".path").css("stroke-dashoffset");
	//on a scroll event - execute function
	$(window).scroll(function() {
		//calculate how far down the page the user is 
		var $percentageComplete = 100 - (($(window).scrollTop() / ($("html").height() - $(window).height())) * 200);
		var $percentageOpacity = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
		//convert dashoffset pixel value to interger
		var $newUnit = parseInt(6374, 10);
		//get the value to be subtracted from the 'stroke-dashoffset'
		var $offsetUnit = $percentageComplete * ($newUnit / 100);
		//get the value of opacity
		var $opacityUnit = ($percentageOpacity)/40;
		//set the new value of the dashoffset to create the drawing effect
		$(".path").css("stroke-dashoffset",$newUnit - $offsetUnit);
		$(".path").css("opacity", (1 - $opacityUnit));

	});

	//	Section Strikethrough
	$(window).on("scroll", function(){
		if ($(window).width() <= 752){
			if($(window).scrollTop() > 4300){
				document.getElementById('heading--contact').classList.add('strikethrough--heading');
				document.getElementById('heading--contact').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#contact').addClass('active');
			}else if($(window).scrollTop() > 3800){
				document.getElementById('heading--films').classList.add('strikethrough--heading');
				document.getElementById('heading--films').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#films').addClass('active');
			} else if($(window).scrollTop() > 1700){
				document.getElementById('heading--work').classList.add('strikethrough--heading');
				document.getElementById('heading--work').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#work').addClass('active');
			} else if($(window).scrollTop() > 200){
				document.getElementById('heading--about').classList.add('strikethrough--heading');
				document.getElementById('heading--about').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#about').addClass('active');
				function runAnimation() {
					$(".about--skill").addClass('animate');	
					$(".about--skill").css('visibility', 'inherit');	
				}
				setTimeout(runAnimation, 700);
			} else {
				$('#menu a').removeClass('active');
			}
		} else if ($(window).width() <= 1023){
			if($(window).scrollTop() > 2800){
				document.getElementById('heading--contact').classList.add('strikethrough--heading');
				document.getElementById('heading--contact').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#contact').addClass('active');
			}else if($(window).scrollTop() > 2200){
				document.getElementById('heading--films').classList.add('strikethrough--heading');
				document.getElementById('heading--films').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#films').addClass('active');
			} else if($(window).scrollTop() > 800){
				document.getElementById('heading--work').classList.add('strikethrough--heading');
				document.getElementById('heading--work').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#work').addClass('active');
			} else if($(window).scrollTop() > 300){
				document.getElementById('heading--about').classList.add('strikethrough--heading');
				document.getElementById('heading--about').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#about').addClass('active');
				function runAnimation() {
					$(".about--skill").addClass('animate');	
					$(".about--skill").css('visibility', 'inherit');
				}
				setTimeout(runAnimation, 700);
			} else {
				$('#menu a').removeClass('active');
			}
		} else {
			if($(window).scrollTop() > 2400){
				document.getElementById('heading--contact').classList.add('strikethrough--heading');
				document.getElementById('heading--contact').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#contact').addClass('active');
			}else if($(window).scrollTop() > 1700){
				document.getElementById('heading--films').classList.add('strikethrough--heading');
				document.getElementById('heading--films').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#films').addClass('active');
			} else if($(window).scrollTop() > 800){
				document.getElementById('heading--work').classList.add('strikethrough--heading');
				document.getElementById('heading--work').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#work').addClass('active');
			} else if($(window).scrollTop() > 300){
				document.getElementById('heading--about').classList.add('strikethrough--heading');
				document.getElementById('heading--about').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#about').addClass('active');
				function runAnimation() {
					$(".about--skill").addClass('animate');	
					$(".about--skill").css('visibility', 'inherit');	
				}
				setTimeout(runAnimation, 700);
			} else {
				$('#menu a').removeClass('active');
			}
		}

	});


	//	Animate Work
	$(window).on("scroll", function(){
		if ($(window).width() <= 752){
			if($(window).scrollTop() > 1700){
				function runAnimation() {
					$(".projects").addClass('animate');	
					$(".projects").css('visibility', 'inherit');	
				}
				setTimeout(runAnimation, 700);

			} else {}
		} else {
			if($(window).scrollTop() > 800){
				function runAnimation() {
					$(".projects").addClass('animate');	
					$(".projects").css('visibility', 'inherit');	
				}
				setTimeout(runAnimation, 700);

			} else {}
		}
	});

	//	Animate Youtube Frame
	$(window).on("scroll", function(){
		if ($(window).width() <= 752){
			if($(window).scrollTop() > 3800){
				$('.films--background').addClass('animate');
				$('.outer-container').css('opacity', '1');
			} else {}
		} else if ($(window).width() <= 1023){
			if($(window).scrollTop() > 2200){
				$('.films--background').addClass('animate');
				$('.outer-container').css('opacity', '1');
			} else {}
		} else {
			if($(window).scrollTop() > 1700){
				$('.films--background').addClass('animate');
				$('.outer-container').css('opacity', '1');
			} else {}
		}
	});

	//	Contact Section
	$(window).on("scroll", function(){
		if ($(window).width() <= 752){
			if($(window).scrollTop() > 4300){
				$('.action-call').css('opacity', '1');
				$('.picture-wrapper').addClass('animate');	
				$('.social-icons').addClass('animate');
				$('.contact-wrapper').removeClass('contact-show');
				$('.imprint-wrapper').removeClass('imprint-show');
			}			
		} else if ($(window).width() <= 1023){
			if($(window).scrollTop() > 2800){
				$('.action-call').css('opacity', '1');
				$('.picture-wrapper').addClass('animate');	
				$('.social-icons').addClass('animate');
				$('.contact-wrapper').removeClass('contact-show');
				$('.imprint-wrapper').removeClass('imprint-show');
			}	
		} else {
			if($(window).scrollTop() > 2400){
				$('.action-call').css('opacity', '1');
				$('.picture-wrapper').addClass('animate');	
				$('.social-icons').addClass('animate');
				$('.contact-wrapper').removeClass('contact-show');
				$('.imprint-wrapper').removeClass('imprint-show');
			}	
		}
	});

	//	Automated Scroll
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);

				if (target.length) {
					if ($(window).width() <= 752){
						$('html,body').animate({
							scrollTop: target.offset().top - 75
						}, 500);
						return false;
					} else {
						$('html,body').animate({
							scrollTop: target.offset().top - 90
						}, 500);
						return false;
					}
				}
			}
		});
		$('#menu a').click(function () {
			$('#menu a').removeClass('active');
			$(this).addClass('active');
		});
	});
});

$(window).resize(function() {
	//	Drawing Animation

	var path = document.querySelector('.path');
	var length = path.getTotalLength();

	//variable for the 'stroke-dashoffset' unit
	var $dashOffset = $(".path").css("stroke-dashoffset");
	//on a scroll event - execute function
	$(window).scroll(function() {
		//calculate how far down the page the user is 
		var $percentageComplete = 100 - (($(window).scrollTop() / ($("html").height() - $(window).height())) * 200);
		var $percentageOpacity = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
		//convert dashoffset pixel value to interger
		var $newUnit = parseInt(6374, 10);
		//get the value to be subtracted from the 'stroke-dashoffset'
		var $offsetUnit = $percentageComplete * ($newUnit / 100);
		//get the value of opacity
		var $opacityUnit = ($percentageOpacity)/40;
		//set the new value of the dashoffset to create the drawing effect
		$(".path").css("stroke-dashoffset",$newUnit - $offsetUnit);
		$(".path").css("opacity", (1 - $opacityUnit));

	});

		//	Section Strikethrough
	$(window).on("scroll", function(){
		if ($(window).width() <= 752){
			if($(window).scrollTop() > 4300){
				document.getElementById('heading--contact').classList.add('strikethrough--heading');
				document.getElementById('heading--contact').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#contact').addClass('active');
			}else if($(window).scrollTop() > 3800){
				document.getElementById('heading--films').classList.add('strikethrough--heading');
				document.getElementById('heading--films').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#films').addClass('active');
			} else if($(window).scrollTop() > 1700){
				document.getElementById('heading--work').classList.add('strikethrough--heading');
				document.getElementById('heading--work').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#work').addClass('active');
			} else if($(window).scrollTop() > 200){
				document.getElementById('heading--about').classList.add('strikethrough--heading');
				document.getElementById('heading--about').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#about').addClass('active');
				function runAnimation() {
					$(".about--skill").addClass('animate');	
					$(".about--skill").css('visibility', 'inherit');	
				}
				setTimeout(runAnimation, 700);
			} else {
				$('#menu a').removeClass('active');
			}
		} else if ($(window).width() <= 1023){
			if($(window).scrollTop() > 2800){
				document.getElementById('heading--contact').classList.add('strikethrough--heading');
				document.getElementById('heading--contact').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#contact').addClass('active');
			}else if($(window).scrollTop() > 2200){
				document.getElementById('heading--films').classList.add('strikethrough--heading');
				document.getElementById('heading--films').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#films').addClass('active');
			} else if($(window).scrollTop() > 800){
				document.getElementById('heading--work').classList.add('strikethrough--heading');
				document.getElementById('heading--work').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#work').addClass('active');
			} else if($(window).scrollTop() > 300){
				document.getElementById('heading--about').classList.add('strikethrough--heading');
				document.getElementById('heading--about').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#about').addClass('active');
				function runAnimation() {
					$(".about--skill").addClass('animate');	
					$(".about--skill").css('visibility', 'inherit');
				}
				setTimeout(runAnimation, 700);
			} else {
				$('#menu a').removeClass('active');
			}
		} else {
			if($(window).scrollTop() > 2400){
				document.getElementById('heading--contact').classList.add('strikethrough--heading');
				document.getElementById('heading--contact').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#contact').addClass('active');
			}else if($(window).scrollTop() > 1700){
				document.getElementById('heading--films').classList.add('strikethrough--heading');
				document.getElementById('heading--films').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#films').addClass('active');
			} else if($(window).scrollTop() > 800){
				document.getElementById('heading--work').classList.add('strikethrough--heading');
				document.getElementById('heading--work').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#work').addClass('active');
			} else if($(window).scrollTop() > 300){
				document.getElementById('heading--about').classList.add('strikethrough--heading');
				document.getElementById('heading--about').classList.remove('heading--show');
				$('#menu a').removeClass('active');
				$('#about').addClass('active');
				function runAnimation() {
					$(".about--skill").addClass('animate');	
					$(".about--skill").css('visibility', 'inherit');	
				}
				setTimeout(runAnimation, 700);
			} else {
				$('#menu a').removeClass('active');
			}
		}

	});


	//	Animate Work
	$(window).on("scroll", function(){
		if ($(window).width() <= 752){
			if($(window).scrollTop() > 1700){
				function runAnimation() {
					$(".projects").addClass('animate');	
					$(".projects").css('visibility', 'inherit');	
				}
				setTimeout(runAnimation, 700);

			} else {}
		} else {
			if($(window).scrollTop() > 800){
				function runAnimation() {
					$(".projects").addClass('animate');	
					$(".projects").css('visibility', 'inherit');	
				}
				setTimeout(runAnimation, 700);

			} else {}
		}
	});

	//	Animate Youtube Frame
	$(window).on("scroll", function(){
		if ($(window).width() <= 752){
			if($(window).scrollTop() > 3800){
				$('.films--background').addClass('animate');
				$('.outer-container').css('opacity', '1');
			} else {}
		} else if ($(window).width() <= 1023){
			if($(window).scrollTop() > 2200){
				$('.films--background').addClass('animate');
				$('.outer-container').css('opacity', '1');
			} else {}
		} else {
			if($(window).scrollTop() > 1700){
				$('.films--background').addClass('animate');
				$('.outer-container').css('opacity', '1');
			} else {}
		}
	});

	//	Contact Section
	$(window).on("scroll", function(){
		if ($(window).width() <= 752){
			if($(window).scrollTop() > 4300){
				$('.action-call').css('opacity', '1');
				$('.picture-wrapper').addClass('animate');	
				$('.social-icons').addClass('animate');
				$('.contact-wrapper').removeClass('contact-show');
				$('.imprint-wrapper').removeClass('imprint-show');
			}			
		} else if ($(window).width() <= 1023){
			if($(window).scrollTop() > 2800){
				$('.action-call').css('opacity', '1');
				$('.picture-wrapper').addClass('animate');	
				$('.social-icons').addClass('animate');
				$('.contact-wrapper').removeClass('contact-show');
				$('.imprint-wrapper').removeClass('imprint-show');
			}	
		} else {
			if($(window).scrollTop() > 2400){
				$('.action-call').css('opacity', '1');
				$('.picture-wrapper').addClass('animate');	
				$('.social-icons').addClass('animate');
				$('.contact-wrapper').removeClass('contact-show');
				$('.imprint-wrapper').removeClass('imprint-show');
			}	
		}
	});

//	//	Automated Scroll
//	$(function() {
//		$('a[href*=#]:not([href=#])').click(function() {
//			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//				var target = $(this.hash);
//
//				if (target.length) {
//					if ($(window).width() <= 752){
//						$('html,body').animate({
//							scrollTop: target.offset().top - 75
//						}, 450);
//						return false;
//					} else {
//						$('html,body').animate({
//							scrollTop: target.offset().top - 90
//						}, 450);
//						return false;
//					}
//				}
//			}
//		});
//		$('#menu a').click(function () {
//			$('#menu a').removeClass('active');
//			$(this).addClass('active');
//		});
//	});
});