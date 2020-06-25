$('.mw-editsection').css("display", "none");
document.querySelector('.mw-parser-output').style.display = "flex";
document.querySelector('.mw-parser-output').style.flexDirection = "column";
document.querySelector('.mw-parser-output').style.marginTop = "50px";

$('p').css("textAlign", "justify");

var titles = document.querySelectorAll('h2');
var i;
for (i =0; i< titles.length; i++){
    titles[i].style.textAlign = "center";
}

var image_article = document.getElementsByClassName("thumbimage");
var i;
for (i = 0; i < image_article.length; i++) {
  image_article[i].style.width = "200%";
  image_article[i].style.height = "auto";
}

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



