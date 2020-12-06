

 $(function(){
 	 
 	$('.sanpham .content ul').isotope({
	itemSelector: 'li'
	}); 
		

 	$('.sanpham .danhsach nav ul li a').click(function(event) {
 		//xu ly menu san pham
 		$('.sanpham .danhsach nav ul li a:nth-child(n)').removeClass('dsactive');
 		$(this).addClass('dsactive');
 		//xu ly sap xep va loc san pham
 		var danhsach = $(this).data('class');
 		// console.log(danhsach);

 		if (danhsach == '.all') {
		
		$('.sanpham .content ul').isotope({filter:'*'});
		}
		else {
		
			$('.sanpham .content ul').isotope({filter:danhsach});
		}

 		return false;
 	});

 	$('.gt').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoigt').offset().top},2000);
 		$('.menutop nav ul li:nth-child(n)').removeClass('active');
 		$('.menutop nav ul li:nth-child(1)').addClass('active');
 		return false;
 	});

 	$('.xuong, .kn').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoiedu').offset().top},2000);
 		$('.menutop nav ul li:nth-child(n)').removeClass('active');
 		$('.menutop nav ul li:nth-child(2)').addClass('active');
 		return false;
 	});
 	$('.sp').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoisp').offset().top},2000);
 		$('.menutop nav ul li:nth-child(n)').removeClass('active');
 		$('.menutop nav ul li:nth-child(3)').addClass('active');
 		return false;
 	});
 	$('.ttlh').click(function(event) {
 		$('body, html').animate({scrollTop:$('#khoittlienhe').offset().top},2000);
 		$('.menutop nav ul li:nth-child(n)').removeClass('active');
 		$('.menutop nav ul li:nth-child(4)').addClass('active');
 		return false;
 	});
 	
 	$('.cm').click(function(event) {
 		$('body, html').animate({scrollTop:$('#phanhoi').offset().top},2000);
 		$('.menutop nav ul li:nth-child(n)').removeClass('active');
 		$('.menutop nav ul li:nth-child(5)').addClass('active');
 		return false;
 	});

 	 // vt = vi tri	
 	$(window).scroll(function(event) {
 		/* Act on the event */
 		var vtbody =	$('body, html').scrollTop()
 		console.log(vtbody);
 		if (vtbody < 962) {
 			$('.menutop nav ul li:nth-child(n)').removeClass('active');
 			$('.menutop nav ul li:nth-child(1)').addClass('active');
 		}
 		else if(vtbody < 1973) {
 			$('.menutop nav ul li:nth-child(n)').removeClass('active');
 			$('.menutop nav ul li:nth-child(2)').addClass('active');
 		}
 		else if(vtbody < 2428) {
 			$('.menutop nav ul li:nth-child(n)').removeClass('active');
 			$('.menutop nav ul li:nth-child(3)').addClass('active');
 		}
 		else if(vtbody < 2546) {
 			$('.menutop nav ul li:nth-child(n)').removeClass('active');
 			$('.menutop nav ul li:nth-child(4)').addClass('active');
 		}
 		else if(vtbody < 9999) {
 			$('.menutop nav ul li:nth-child(n)').removeClass('active');
 			$('.menutop nav ul li:nth-child(5)').addClass('active');
 		}
 	
 	
 	});
 	
}) 
