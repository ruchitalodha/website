$(document).ready(function(){
	$('#menu-toggle').click(function() {
	    $(this).toggleClass('active');
	    $('.logo').toggleClass('logo-menu-open');
	    $('.menu-overlay').toggleClass('open');
	  });

	  $('.main-nav li a').click(function() {
	    $('#menu-toggle').removeClass('active');
	    $('.logo').removeClass('logo-menu-open');
	    $('.menu-overlay').removeClass('open');
	  });

	$('a[href="#top"]').click(function() {
	    $('#menu-toggle').removeClass('active');
	    $('.logo').removeClass('logo-menu-open');
    $('.menu-overlay').removeClass('open');
  });
});
