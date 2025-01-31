
  (function ($) {
  
  "use strict";

    //NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    //Toggle Nav function
    window.toggleNav = function () {
      const nav = document.getElementById('verticalNav');
      const menu = document.querySelector('.hamburger-menu');
      nav.classList.toggle('open');
      menu.classList.toggle('open');
    };

    //Banner Carousel
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 1500,
    })

    //REVIEWS NAVIGATION
    function ReviewsNavResize(){
      $(".navbar").scrollspy({ offset: -94 });

      var ReviewsOwlItem = $('.reviews-carousel .owl-item').width();

      $('.reviews-carousel .owl-nav').css({'width' : (ReviewsOwlItem) + 'px'});
    }

    $(window).on("resize", ReviewsNavResize);
    $(document).on("ready", ReviewsNavResize);

    //HREF LINKS
    $('a[href*="#"]').click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 74
          }, 1000);
        }
      }
    });

    //Dropdowns
    //Top 5 Dropdown
    document.addEventListener("DOMContentLoaded", function () {
      // Ensure this script only runs for the Top 5 page
      if (!window.location.pathname.endsWith("top5.html")) return;
  
      // Select all dropdown headers specific to the Top 5 page
      const topfiveHeaders = document.querySelectorAll(".topfive-dropdown-header");
  
      topfiveHeaders.forEach(header => {
          header.addEventListener("click", function () {
              const content = this.nextElementSibling;
  
              if (!content) return; // Prevent errors if structure changes
  
              // Toggle the "open" class on the current dropdown content
              content.classList.toggle("open");
  
              // Rotate the arrow when open
              const arrow = this.querySelector(".topfive-arrow");
              if (arrow) {
                  arrow.style.transform = content.classList.contains("open") ? "rotate(180deg)" : "rotate(0deg)";
              }
  
              // Close other open dropdowns
              document.querySelectorAll(".topfive-dropdown-content").forEach(otherContent => {
                  if (otherContent !== content && otherContent.classList.contains("open")) {
                      otherContent.classList.remove("open");
  
                      // Reset the arrow for closed dropdowns
                      const otherArrow = otherContent.previousElementSibling.querySelector(".topfive-arrow");
                      if (otherArrow) {
                          otherArrow.style.transform = "rotate(0deg)";
                      }
                  }
              });
          });
      });
    });

    // Popup People Info
    const open = document.getElementById('open');
    const popup = document.getElementById('popup');
    const close = document.getElementById('close');
    
    if (open && popup && close) {
        open.addEventListener('click', () => {
            popup.classList.add('show');
        });
    
        close.addEventListener('click', () => {
            popup.classList.remove('show');
        });
    }

    open.addEventListener('click', () => {
      popup_container.classList.add('show');
    });

    open.addEventListener('click', () => {
      popup_container.classList.remove('show');
    });

    
  })(window.jQuery);

  //Conditions Dropdown
  function toggleCard(button) {
    const card = button.closest('.condition-card');
    const extraContent = card.querySelector('.extra-content');
  
    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
      extraContent.style.display = 'block';
      card.classList.add('expanded');
      button.textContent = 'Show less'; // Update button text
    } else {
      extraContent.style.display = 'none';
      card.classList.remove('expanded');
      button.textContent = 'Click here for a more comprehensive list of ASD symptoms';
    }
    setTimeout(() => button.blur(), 350);
  }

  //Terminology Images
  document.querySelectorAll('.term-card img').forEach(img => {
    img.addEventListener('click', function () {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = this.src; // Set the image source to the clicked image
        lightbox.classList.add('active'); // Show the lightbox
    });
  });

  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active'); // Hide the lightbox
  }

  //Fact vs Myth
  function flipCard(card) {
    card.classList.toggle('flipped');
  }