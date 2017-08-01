$(document).ready(function(){
  $('.lowNav').on('click', function() {
    $(this).find('.dropDown li').slideToggle(400);
});
  $('li.question').on('click', function(e) {
    e.preventDefault();
    $(this).next()
      .slideToggle(500)
        .siblings('.answers').slideUp(200);
  });

});
