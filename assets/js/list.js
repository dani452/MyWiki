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

$('h3').css('marginBottom', '0px');
$('h3 a').css('textDecoration', 'none');
$('h3 a').css('color', 'rgb(50, 50, 50)');

