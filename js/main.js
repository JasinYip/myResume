var topPosition, navPosition;

$(function(){
	$(window).resize();
	$("#block-nav").css("z-index", 1);

	// 导航条固定顶部
	navPosition = $("#block-firstPage").height();
	topPosition = $(document).scrollTop();
	navFixed();

	//平滑滚动导航
	$('#fstPage-down a, nav a, #logo').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-52}, 600);
		event.preventDefault();
	});
});
	
$(document).scroll( function() {
	topPosition = $(document).scrollTop();
	navFixed();
});


$(window).resize(function(){ 

	//首页满屏
	$("#block-firstPage").css("height", $(window).height());
	//首页文字效果
	$('.blockTitle').stop().fadeIn("fast").animate({
		"top"     : ($(window).height() - $('.blockTitle').outerHeight())/2
	},600); 

	navPosition = $("#block-firstPage").height();
	navFixed();
}); 

function navFixed(){
	if (topPosition>=navPosition){
	    $("#block-nav").css("position", "fixed");
	    $("#block-intro").css("margin-top", "52px");
	  }else{
	    $("#block-nav").css("position", "relative");
	    $("#block-intro").css("margin-top", "0");
	  }

}