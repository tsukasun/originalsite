// scroll fadeIn
$(function() {
  $(window).scroll(function() {
    let scrollTopValue = $(document).scrollTop();
    if (scrollTopValue > -1) {
      $('.top').fadeIn('slow');
    } else {
      $('.top').fadeOut();
    }
    
    let profile = $('.profile');
    let profileTop = profile.offset().top;
    if (scrollTopValue > profileTop - 100) {
      $('.profile').fadeIn('slow');
    } else {
      $('.profile').fadeOut();
    }

    let contents = $('.contents-wrapper');
    let contentsTop = contents.offset().top;
    if (scrollTopValue > contentsTop - 100) {
      $('.contents ').fadeIn('slow');
    } else {
      $('.contents').fadeOut();
    } 
    if (scrollTopValue > contentsTop - 100) {
      $('.content').fadeIn('slow');
    } else {
      $('.content').fadeOut();
    }

    let sns = $('.contact-form');
    let snsTop = sns.offset().top;
    if (scrollTopValue > snsTop - 100) {
      $('.snss').fadeIn('slow');
    } else {
      $('.snss').fadeOut();
    }
  })


  $('header a').on('click'(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
  $('html, body').animate({
    'scrollTop': position
  } ,speed,'swing');
  }))

  
});
