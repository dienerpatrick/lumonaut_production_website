// JavaScript

$(document).ready(function() {
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	
	$("#weddingCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX;
		var newvalueY = height * pageY +25 -60;
		
		$('#weddingImage').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#weddingCard").mouseleave(function() {
		$('#weddingImage').css({'transform' : 'translate( 0px , 0px)' });
	});
	
	$("#weddingCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 -70;
		var newvalueY = height * pageY * -1 +120;
		
		$('#weddingTitle').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#weddingCard").mouseleave(function() {
		$('#weddingTitle').css({'transform' : 'translate( -70px , 80px)' });
	});
	
	$("#weddingCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 -70;
		var newvalueY = height * pageY * -1 +190;
		
		$('#weddingDesc').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#weddingCard").mouseleave(function() {
		$('#weddingDesc').css({'transform' : 'translate( -70px , 150px)' });
	});
	
	
});

$(function() {
		$('a[href*=\\#]:not([href=\\#])').on('click', function() {
			var target = $(this.hash);
			target = target.length ? target : $('[name=]' + this.hash.substr(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		});
	});