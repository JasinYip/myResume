$(function(){
	$(window).resize();
	var navSpace = $("header").offset().top;
	$("#block-nav").css("z-index", 1);

	// 导航条固定顶部
	$(document).scroll( function() {
	  var topSpace = $(document).scrollTop();
	  if (topSpace>=navSpace){
	    $("#block-nav").css("position", "fixed");
	    $("#block-intro").css("margin-top", "52px");
	  }else{
	    $("#block-nav").css("position", "relative");
	    $("#block-intro").css("margin-top", "0");
	  }
	});

	//平滑滚动导航
	$('#fstPage-down a, nav a, #logo').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-52}, 600);
		event.preventDefault();
	});
});

$(window).resize(function(){ 
	$("#block-firstPage").css("height", $(window).height());
	$('.blockTitle').css("top", ($(window).height() - $('.blockTitle').outerHeight())/2 ); 
}); 