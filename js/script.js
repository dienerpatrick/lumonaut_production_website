// JavaScript


//Card Hover Animation

$(document).ready(function() {
	

	
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	
	
	
	$("#weddingCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX + 5;
		var newvalueY = height * pageY -55;
		
		$('#weddingImage').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#weddingCard").mouseleave(function() {
		$('#weddingImage').css({'transform' : 'translate( 0px , 0px)' });
	});
	
	$("#weddingCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 -73;
		var newvalueY = height * pageY * -1 +135;
		
		$('#weddingTitle').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#weddingCard").mouseleave(function() {
		$('#weddingTitle').css({'transform' : 'translate( -70px , 80px)' });
	});
	
	$("#weddingCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 -73;
		var newvalueY = height * pageY * -1 +200;
		
		$('#weddingDesc').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#weddingCard").mouseleave(function() {
		$('#weddingDesc').css({'transform' : 'translate( -70px , 145px)' });
	});
	

});


//Concert Card


$(document).ready(function() {
	

	
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	
	
	
	$("#concertCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX -5;
		var newvalueY = height * pageY -55;
		
		$('#concertImage').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#concertCard").mouseleave(function() {
		$('#concertImage').css({'transform' : 'translate( 0px , 0px)' });
	});
	
	$("#concertCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 + 304;
		var newvalueY = height * pageY * -1 + 405;
		
		$('#concertTitle').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#concertCard").mouseleave(function() {
		$('#concertTitle').css({'transform' : 'translate( 305px , 350px)' });
	});
	
	$("#concertCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 + 304;
		var newvalueY = height * pageY * -1 + 470;
		
		$('#concertDesc').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#concertCard").mouseleave(function() {
		$('#concertDesc').css({'transform' : 'translate( 305px , 415px)' });
	});
	
//Event Card
	
$(document).ready(function() {
	

	
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	
	
	
	$("#eventCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX + 5;
		var newvalueY = height * pageY -75;
		
		$('#eventImage').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#eventCard").mouseleave(function() {
		$('#eventImage').css({'transform' : 'translate( 0px , 0px)' });
	});
	
	$("#eventCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 -73;
		var newvalueY = height * pageY * -1 +155;
		
		$('#eventTitle').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#eventCard").mouseleave(function() {
		$('#eventTitle').css({'transform' : 'translate( -70px , 80px)' });
	});
	
	$("#eventCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 -73;
		var newvalueY = height * pageY * -1 +220;
		
		$('#eventDesc').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#eventCard").mouseleave(function() {
		$('#eventDesc').css({'transform' : 'translate( -70px , 145px)' });
	});
	

});
	
	
});

//Event Card
	
$(document).ready(function() {
	

	
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	
	
	
	$("#fashionCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX -5;
		var newvalueY = height * pageY -75;
		
		$('#fashionImage').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#fashionCard").mouseleave(function() {
		$('#fashionImage').css({'transform' : 'translate( 0px , 0px)' });
	});
	
	$("#fashionCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 +310;
		var newvalueY = height * pageY * -1 +483;
		
		$('#fashionTitle').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#fashionCard").mouseleave(function() {
		$('#fashionTitle').css({'transform' : 'translate( 305px , 410px)' });
	});
	
	$("#fashionCard").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 +310;
		var newvalueY = height * pageY * -1 +548;
		
		$('#fashionDesc').css({'transform' : 'translate(' + newvalueX + 'px , ' + newvalueY + 'px)' });
	});
	$("#fashionCard").mouseleave(function() {
		$('#fashionDesc').css({'transform' : 'translate( 305px , 475px)' });
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