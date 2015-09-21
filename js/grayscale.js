$(window).scroll(function()
{
  var $navbar = $('.navbar-fixed-top');
  var $navbarBrand = $navbar.find('a.navbar-brand');

    if ($('.navbar').offset().top > 50)
    {
      $navbar.addClass('top-nav-collapse');
      $navbarBrand.show();
    }
    else
    {
      $navbar.removeClass('top-nav-collapse');
      $navbarBrand.hide();
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
