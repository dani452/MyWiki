$('.mw-editsection').addClass('edit_article_remove');

$(document).ready(function() {
  $(".infobox_v2 a").removeAttr("href");
  $("p a").removeAttr("href");
  $(".bandeau-cell a").removeAttr("href");
});

$('.infobox_v2').addClass('table_info');

var titles = document.querySelectorAll('h2');
var i;
for (i =0; i< titles.length; i++){
    titles[i].style.textAlign = "center";
}

var image_article = document.getElementsByClassName("thumb tright");
var i;
for (i = 0; i < image_article.length; i++) {
  image_article[i].style.float = "right";
  image_article[i].style.marginLeft = "20px";
}

var image_article = document.getElementsByClassName("thumb tleft");
var i;
for (i = 0; i < image_article.length; i++) {
  image_article[i].style.float = "left";
  image_article[i].style.marginRight = "20px";
}

$('.toc_niveau_2').addClass('toc_niveau_2_article');
$('.toc').addClass('toc_article');
$('ul').addClass('ul_article');
$('li').addClass('li_article');

$('.image').removeAttr('href');

$('.navbox').css("width", "100%");
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



