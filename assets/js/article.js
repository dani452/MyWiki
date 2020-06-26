import AOS from 'aos';
import 'aos/dist/aos.css';
     $(function() {
          AOS.init();
     });
AOS.init({ duration: 500 });


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

$(function() {
  $('.article_title').addClass('move_title_article');
  $('.button_article').addClass('move_button_article');
});


jQuery( document ).ready(function() {
  jQuery('.tright').attr('data-aos', 'fade-left');
});
jQuery( document ).ready(function() {
  jQuery('.tleft').attr('data-aos', 'fade-right');
});