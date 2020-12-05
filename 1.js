
//  $(function(){

//  	$('.sanpham .content ul').isotope({
// 	itemSelector: 'li'
// 	}); 
		

//  	$('.sanpham .danhsach nav ul li a').click(function(event) {
//  		var danhsach = $(this).data('class');
//  		console.log(danhsach);

//  		if (danhsach == '.all') {
		
// 		$('.sanpham .content ul').isotope({filter:'*'});
// 		}
// 		else {
		
// 			$('.sanpham .content ul').isotope({filter:danhsach});
// 		}

//  		return false;
//  	});

//  	$('.gt').click(function(event) {
//  		$('body, html').animate({scrollTop:$('#khoigt').offset().top},2000);
//  		return false;
//  	});

//  	$('.xuong, .kn').click(function(event) {
//  		$('body, html').animate({scrollTop:$('#khoiedu').offset().top},2000);
//  		return false;
//  	});
//  	$('.sp').click(function(event) {
//  		$('body, html').animate({scrollTop:$('#khoisp').offset().top},2000);
//  		return false;
//  	});
//  	$('.ttlh').click(function(event) {
//  		$('body, html').animate({scrollTop:$('#khoittlienhe').offset().top},2000);
//  		return false;
//  	});
 	
//  	$('.cm').click(function(event) {
//  		$('body, html').animate({scrollTop:$('#phanhoi').offset().top},2000);
//  		return false;
//  	});


// }) 

document.addEventListener("DOMContentLoaded",function(){
 	$('.sanpham .content ul').isotope({
	itemSelector: 'li'
	}); 
		

 	$('.sanpham .danhsach nav ul li a').click(function(event) {
 		var danhsach = $(this).data('class');
 		console.log(danhsach);

 		if (danhsach == '.all') {
		
		$('.sanpham .content ul').isotope({filter:'*'});
		}
		else {
		
			$('.sanpham .content ul').isotope({filter:danhsach});
		}

 		return false;
 	});

 	$('.gt').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoigt').offset().top},1000);
 		return false;
 	});

 	$('.xuong, .kn').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoiedu').offset().top},1000);
 		return false;
 	});
 	$('.sp').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoisp').offset().top},1000);
 		return false;
 	});
 	$('.ttlh').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoittlienhe').offset().top},1000);
 		return false;
 	});
 	
 	$('.cm').click(function(event) {
 		$('body, html').animate({scrollTop:$('#phanhoi').offset().top},1000);
 		return false;
 	});

 },false)  

 