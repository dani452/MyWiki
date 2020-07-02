import AOS from 'aos';
import 'aos/dist/aos.css';
     $(function() {
          AOS.init();
     });
AOS.init({ duration: 600 });

// $(window).scroll(function(){
//   if ($(window).scrollTop() >= 0) {
//       $('.nav_title').addClass('fixed-header');
//       $('.nav_title div').addClass('visible-title');
//   }
//   else {
//       $('.nav_title').removeClass('fixed-header');
//       $('.nav_title div').removeClass('visible-title');
//   }
// });

$(document).ready(function() {
  $(".infobox_v2 a").removeAttr("href");
  $("p a").removeAttr("href");
  $(".bandeau-cell a").removeAttr("href");
});
$('.infobox_v2').addClass('table_info');

$(document).ready(function() {
  $(".infobox_v3 a").removeAttr("href");
});
$('.infobox_v3').addClass('table_info');


$('.image').removeAttr('href');

var btn = $('#button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

jQuery( document ).ready(function() {
  jQuery('.tright').attr('data-aos', 'fade-in');
});
jQuery( document ).ready(function() {
  jQuery('.tleft').attr('data-aos', 'fade-in');
});


$(function() {
  $(window).resize(function() {
      var sW = $(window).width();
      $('img').css('maxWidth', sW + 'px');
  });        
});


let scrollTop = window.scrollY;
let viewportHeight = document.body.clientHeight - window.innerHeight;
let scrollPercent = (scrollTop / viewportHeight) * 100;
let progressBar = document.querySelector('#js-progressbar');

progressBar.setAttribute('value', scrollPercent);

window.addEventListener('scroll', function() {
  scrollTop = window.scrollY;
  viewportHeight = document.body.clientHeight - window.innerHeight;
  scrollPercent = (scrollTop / viewportHeight) * 100;
  progressBar.setAttribute('value', scrollPercent);
});

