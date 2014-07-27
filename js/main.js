$(function(){
	$(window).resize();

	$("#block-nav").css("z-index", 1);

	//导航条固定顶部
	var navSpace = $("#block-nav").offset().top;
	$(window).scroll( function() {
	  var topSpace = $(window).scrollTop();
	  if (topSpace>=navSpace){
	    $("#block-nav").css("position", "fixed");
	    $("#block-nav").css("top", "0");
	  }else{
	    $("#block-nav").css("position", "static");
	    $("#block-nav").css("top", null);
	  }

	//平滑滚动导航
	$('nav a, #logo').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
			}, 500);
			event.preventDefault();
		});
	});

	//link的hover效果
	$(".link").hover(function(){
		$(this).css("background", "url(img/"+ $(this).attr('id').split('-')[1].toString() +"_hover.png) no-repeat center");
	},function(){
		$(this).css("background", "url(img/"+ $(this).attr('id').split('-')[1].toString() +".png) no-repeat center");
	});



});

$(window).resize(function(){ 
	$("#block-firstPage").css("height", $(window).height());
	$('.blockTitle').css("top", ($(window).height() - $('.blockTitle').outerHeight())/2 ); 
}); 