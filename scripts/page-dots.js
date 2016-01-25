$(document).ready(function() {
//	$('#dot-link1').addClass('selected');
	
	$(function() {
		$('#dot-link1').click(function(){
			$('#dot-link1').addClass('selected');
			$('#dot-link2').removeClass('selected');
			$('#dot-link3').removeClass('selected');
			$('#dot-link4').removeClass('selected');
			$('#dot-link5').removeClass('selected');
			$('#dot-link6').removeClass('selected');

			$('.films--video').css('top','0');

			$('.films--video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
			$('.films--video')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
			$('.films--video')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			
			$('.meta1').addClass('appear');
			$('.meta2').removeClass('appear');
			$('.meta3').removeClass('appear');
			$('.meta4').removeClass('appear');
			$('.meta5').removeClass('appear');
			$('.meta6').removeClass('appear');
		});

		$('#dot-link2').click(function(){
			$('#dot-link1').removeClass('selected');
			$('#dot-link2').addClass('selected');
			$('#dot-link3').removeClass('selected');
			$('#dot-link4').removeClass('selected');
			$('#dot-link5').removeClass('selected');
			$('#dot-link6').removeClass('selected');

			$('.films--video').css('top','-100%');
			
			$('.films--video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
			$('.films--video')[1].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
			$('.films--video')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			
			$('.meta1').removeClass('appear');
			$('.meta2').addClass('appear');
			$('.meta3').removeClass('appear');
			$('.meta4').removeClass('appear');
			$('.meta5').removeClass('appear');
			$('.meta6').removeClass('appear');
		});

		$('#dot-link3').click(function(){
			$('#dot-link1').removeClass('selected');
			$('#dot-link2').removeClass('selected');
			$('#dot-link3').addClass('selected');
			$('#dot-link4').removeClass('selected');
			$('#dot-link5').removeClass('selected');
			$('#dot-link6').removeClass('selected');

			$('.films--video').css('top','-200%');
			
			$('.films--video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
			$('.films--video')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
			$('.films--video')[2].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'); 
			$('.films--video')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			
			$('.meta1').removeClass('appear');
			$('.meta2').removeClass('appear');
			$('.meta3').addClass('appear');
			$('.meta4').removeClass('appear');
			$('.meta5').removeClass('appear');
			$('.meta6').removeClass('appear');
		});

		$('#dot-link4').click(function(){
			$('#dot-link1').removeClass('selected');
			$('#dot-link2').removeClass('selected');
			$('#dot-link3').removeClass('selected');
			$('#dot-link4').addClass('selected');
			$('#dot-link5').removeClass('selected');
			$('#dot-link6').removeClass('selected');

			$('.films--video').css('top','-300%');
			
			$('.films--video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
			$('.films--video')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
			$('.films--video')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[3].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'); 
			$('.films--video')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
			
			$('.meta1').removeClass('appear');
			$('.meta2').removeClass('appear');
			$('.meta3').removeClass('appear');
			$('.meta4').addClass('appear');
			$('.meta5').removeClass('appear');
			$('.meta6').removeClass('appear');
		});

		$('#dot-link5').click(function(){
			$('#dot-link1').removeClass('selected');
			$('#dot-link2').removeClass('selected');
			$('#dot-link3').removeClass('selected');
			$('#dot-link4').removeClass('selected');
			$('#dot-link5').addClass('selected');
			$('#dot-link6').removeClass('selected');

			$('.films--video').css('top','-400%');
			
			$('.films--video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
			$('.films--video')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
			$('.films--video')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[4].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'); 
			$('.films--video')[5].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			
			$('.meta1').removeClass('appear');
			$('.meta2').removeClass('appear');
			$('.meta3').removeClass('appear');
			$('.meta4').removeClass('appear');
			$('.meta5').addClass('appear');
			$('.meta6').removeClass('appear');
		});

		$('#dot-link6').click(function(){
			$('#dot-link1').removeClass('selected');
			$('#dot-link2').removeClass('selected');
			$('#dot-link3').removeClass('selected');
			$('#dot-link4').removeClass('selected');
			$('#dot-link5').removeClass('selected');
			$('#dot-link6').addClass('selected');

			$('.films--video').css('top','-500%');
			
			$('.films--video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
			$('.films--video')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
			$('.films--video')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[4].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); 
			$('.films--video')[5].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'); 
			
			$('.meta1').removeClass('appear');
			$('.meta2').removeClass('appear');
			$('.meta3').removeClass('appear');
			$('.meta4').removeClass('appear');
			$('.meta5').removeClass('appear');
			$('.meta6').addClass('appear');
		});
	});

	var container_width = 720 * $(".container-inner a").length;
	$(".container-inner").css("width", container_width);

	if ($(window).width() <= 854) {
		var w = $('body').innerWidth();
		$('.width-fix').css('width', w);
	} else {
		$('.width-fix').css('width', 845);
	}
});

$(window).resize(function(){
	if ($(window).width() <= 854) {
		var wr = $('body').innerWidth();
		$('.width-fix').css('width', wr);
	} else {
		$('.width-fix').css('width', 845);
	}
});