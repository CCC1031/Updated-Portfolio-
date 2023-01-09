
(function($) {
  'use strict';
  $(function() {
   

    // Scrolling animation 
    $(document).on('click', 'a[data-scroll][href^="#"]', function(e) {
      var id = $(this).attr('href');
      var $id = $(id);
      if ($id.length === 0) {
        return;
      }
      e.preventDefault();
      $('body, html').animate({
        scrollTop: $id.offset().top
      }, 600);
    });

    /*--- Sidebar ---*/

    $('body').scrollspy({
      target: '.sidebar .list-menu'
    });

    $('.sidebar .list-menu').clone().children().appendTo('.mobile-navbar .navbar-nav').find('.nav-link').removeClass('active');

    $(document).on('mouseup', function(event) {
      if ($('.mobile-navbar #mobileNavbarSupportedContent').hasClass('show')) {
        // The mobile Bootstrap navbar dropdown
        var navbarToggler = $('.mobile-navbar .navbar-toggler');
        if (!navbarToggler.is(event.target) && navbarToggler.has(event.target).length === 0) {
          navbarToggler.trigger('click');
        }
      }
    });


    /*---- Quotes ---*/

    $('.testimonials-area .owl-carousel').owlCarousel({
      items: 3,
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      smartSpeed: 400,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });


  });
  $(window).on('load', function() {
    /*----------- Preloader -----------*/

    $('.preloader-icon').fadeOut(400);
    $('.preloader').delay(500).fadeOut('slow');

    /*----------- Portfolio -----------*/

    (function() {
      var grid = $('.portfolio-area .portfolio-grid');
      var filters = $('.portfolio-area .filter-control li');

      grid.isotope({
        itemSelector: '.single-item',
      });
      filters.on('click', function() {
        filters.removeClass('tab-active');
        $(this).addClass('tab-active');
        var selector = $(this).data('filter');
        grid.isotope({
          filter: selector,
          transitionDuration: '.25s'
        });
      });
    }())

    $('.portfolio-area .portfolio-grid .portfolio-item').each(function() {
      var element = $(this);
      var target = element.attr('href');
      $(element).animatedModal({
        animatedIn: 'fadeIn',
        animatedOut: 'fadeOut',
        animationDuration: '.15s',
        beforeOpen: function() {
          $(target + '.lightbox-wrapper .lightbox-gallery').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            items: 1,
            smartSpeed: 400
          });
        },
        afterClose: function() {
          $(target + '.lightbox-wrapper .lightbox-gallery').trigger('destroy.owl.carousel');
        }
      });
    });

  });
}(jQuery));