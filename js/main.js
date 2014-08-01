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
	$("#block-firstPage").css("height", $(window).height());
	$('.blockTitle').css("top", ($(window).height() - $('.blockTitle').outerHeight())/2 ); 

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