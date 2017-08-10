$(document).ready(function(){

  $('li.question').on('click', function() {

    $(this).next()
      .slideToggle(500)
        .siblings('li.answer').slideUp();
          var img = $(this).children('img');
            $('img').not(img).removeClass('rotate');
              img.toggleClass('rotate');
            });



  $('.lowNav').on('click', function() {
    $(this).find('.dropDown li').slideToggle(400);
    });

    $('.navMenu ul li').hover(function() {
      $(this).find("ul").stop().fadeToggle(400);
    });
    $("#navMenu ul li").click(function() {
      $(this).find('ul').stop().fadeToggle(400);
    });

});
