﻿ $(function(){
 	$('.gt').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoigt').offset().top},2000);
 		return false;
 	});

 	$('.xuong, .kn').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoiedu').offset().top},2000);
 		return false;
 	});
 	$('.sp').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoisp').offset().top},2000);
 		return false;
 	});
 	$('.ttlh').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoittlienhe').offset().top},2000);
 		return false;
 	});
 	
 	$('.cm').click(function(event) {
 		$('body, html').animate({scrollTop:$('#phanhoi').offset().top},2000);
 		return false;
 	});
 	
})  
 