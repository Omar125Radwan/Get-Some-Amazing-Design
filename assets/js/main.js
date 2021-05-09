
!(function($) {
    "use strict";
  
    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.nav').addClass('header-scrolled');
      } else {
        $('.nav').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('.nav').addClass('header-scrolled');
    };

    $(".nav li a").click(function(e){

      e.preventDefault();

      $("html, body").animate({

          scrollTop: $('#' + $(this).data("scroll")).offset().top + 1

      },1000);

      return(1);

    });

    $('.nav li a').click(function(){
      $('.nav a').removeClass('active');
      $(this).addClass('active');
    });

    $(window).scroll(function(){

      $('.sec').each(function(){
          
        if($(window).scrollTop() < 1) {

            $('.nav a').removeClass('active');

        }

        if($(window).scrollTop() > $(this).offset().top) {

            var blockId = $(this).attr('id');

            $('.nav a').removeClass('active');

            $('.nav li a[data-scroll="' + blockId + '"]').addClass('active');

        }

      });

    });
  
    // Stick the header at top on scroll
    $(".nav").sticky({
      topSpacing: -1,
      zIndex: '50'
    });

    $(window).on("scroll", function(){

        var sc = $(window).scrollTop();

        if(sc > 100){
            $(".bottom-click").fadeIn('fast');
        }else{
            $(".bottom-click").fadeOut('fast');
        }

    });

    $(".bottom-click").on("click", function(){

        $("html, body").animate({

            scrollTop: 0,

        },1000);

    });

    $('#toggle').click(function(){

        $(this).toggleClass('active');

    });

    $('#toggle').click(function() {

        if ($(".nav").hasClass('nav-blocked')) {

            $(".nav").removeClass('nav-blocked');

        }else {
            $(".nav").addClass('nav-blocked');
        }

    });

    $('.nav li a').click(function(){

        if ($('.nav').hasClass('nav-blocked')) {

        $('.nav').removeClass('nav-blocked');

            $('#toggle').removeClass('active');

        } else {

            $('.nav').addClass('nav-blocked');

        }
      
    });

    AOS.init();

    $('.owl-carousel').owlCarousel({
      center: true,
      items:2,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      responsive:{
          0: {
            items: 1
          },
          600:{
              items:2
          },
      }
  });

  // Initiate the venobox plugin
  $(window).on('load', function() {
    $('.venobox').venobox({
      spinner : 'cube-grid'
    });
  });

  $(window).on('load', function() {
    var galleryIsotope = $('.gallery-container').isotope({
      itemSelector: '.gallery-item',
      layoutMode: 'fitRows'
    });

    $('#gallery-flters li').on('click', function() {
      $("#gallery-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      galleryIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in gallery)
  });

  // gallery details carousel
  $(".gallery-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
  
  })(jQuery);