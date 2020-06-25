$('content_article').css("display", "flex");
$('content_article').css("justifyContent", "column");

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



