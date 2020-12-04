 $(function(){
 	$('.xuong, .kn').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoiedu').offset().top},2000);
 		return false;
 	});
 	$('.sp').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoisp').offset().top},2000);
 		return false;
 	});
 	$('.cm').click(function(event) {
 		$('body, html').animate({scrollTop:$('#phanhoi').offset().top},2000);
 		return false;
 	});
 	
})  
 