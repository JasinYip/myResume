$(function(){
	$(window).resize();
	var windowHeight = $(window).height();
	$("#block-nav").css("z-index", 1);

	// 导航条固定顶部
	$("#block-nav").pin();

	//平滑滚动导航
	$('nav a, #logo').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 500);
		event.preventDefault();
	});

	//link的hover效果
	$(".link").hover(function(){
		$(this).css("background", "url(img/"+ $(this).attr('id').split('-')[1].toString() +"_hover.png) no-repeat center");
	},function(){
		$(this).css("background", "url(img/"+ $(this).attr('id').split('-')[1].toString() +".png) no-repeat center");
	});



});

$(window).resize(function(){ 
	$("#block-nav").pin();
	$("#block-firstPage").css("height", $(window).height());
	$('.blockTitle').css("top", ($(window).height() - $('.blockTitle').outerHeight())/2 ); 
}); 