/* Responsive menu toggling as well as sliding element javascript*/

$(document).ready(function() {


  $('body').addClass('js');
  var $menu = $('#menu'),
  $menulink = $('.menu-link');
  
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });
  var row = $('.slide-in'),
  pageHeight = $(window).height();
  $(window).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    $.each(row, function() {
      var rowScroll = $(this).offset().top - pageHeight*0.6;
      if( scrollDistance > rowScroll ) {
        $(this).children('.slide').removeClass('offscreen');
      }
    });
  });
  $(".boxer").boxer();

});


/* Parallax scrolling plugin */
/*
Change the class below to the element you want to use parallax scrolling.
You can also change the speed at which is scrolls by changing the X value in (scrolled*X)
*/
function parallax(){
	var scrolled=$(window).scrollTop();
	$('.background').css('top',-(scrolled*0.5)+'px');
}
$(window).scroll(function(){
  parallax();
});

