/* Responsive menu toggling*/function parallax(){var e=$(window).scrollTop();$(".background").css("top",-(e*.9)+"px")}$(document).ready(function(){$("body").addClass("js");var e=$("#menu"),t=$(".menu-link");t.click(function(){t.toggleClass("active");e.toggleClass("active");return!1});var n=$(".slide-from-left"),r=$(".slide-from-right"),i=$(".slide-in"),s=$(window).height();$(n,r).addClass("offscreen");$(window).scroll(function(){var e=$(this).scrollTop();$.each(i,function(){var t=$(this).offset().top-s*.4;e>t?$(this).children(".slide").removeClass("offscreen"):$(this).children(".slide").addClass("offscreen")})})});$(window).scroll(function(){parallax()});