/* Responsive menu toggling*/

  $(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');
  
$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});
var thing1 = $('.one-third'),
          thing2 = $('.two-third'),
          thing3 = $('.three-third'),
          row = $('.row'),
          pageHeight = $(window).height();
        $(thing1,thing2,thing3).addClass('offscreen');
        $(window).scroll(function() {
          var scrollDistance = $(this).scrollTop();
          $.each(row, function() {
            var rowScroll = $(this).offset().top - pageHeight*.4;
          if( scrollDistance > rowScroll ) {
          $(this).children('.third').removeClass('offscreen');
          } else {
            $(this).children('.third').addClass('offscreen');
          };
        });
         });
});

/* Parallax scrolling plugin */
/*
Change the class below to the element you want to use parallax scrolling.
You can also change the speed at which is scrolls by changing the X value in (scrolled*X)
*/
	function parallax(){
	var scrolled=$(window).scrollTop();
	$('.background').css('top',-(scrolled*0.3)+'px');
	}
  $(window).scroll(function(){
  parallax();
	});

	