(function($) {

    "use strict";

    var searchPopup = function() {
      // open search box
      $('#header-nav').on('click', '.search-button', function(e) {
        $('.search-popup').toggleClass('is-visible');
      });

      $('#header-nav').on('click', '.btn-close-search', function(e) {
        $('.search-popup').toggleClass('is-visible');
      });
      
      $(".search-popup-trigger").on("click", function(b) {
          b.preventDefault();
          $(".search-popup").addClass("is-visible"),
          setTimeout(function() {
              $(".search-popup").find("#search-popup").focus()
          }, 350)
      }),
      $(".search-popup").on("click", function(b) {
          ($(b.target).is(".search-popup-close") || $(b.target).is(".search-popup-close svg") || $(b.target).is(".search-popup-close path") || $(b.target).is(".search-popup")) && (b.preventDefault(),
          $(this).removeClass("is-visible"))
      }),
      $(document).keyup(function(b) {
          "27" === b.which && $(".search-popup").removeClass("is-visible")
      })
    }

    var initProductQty = function(){

      $('.product-qty').each(function(){

        var $el_product = $(this);
        var quantity = 0;

        $el_product.find('.quantity-right-plus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($el_product.find('#quantity').val());
            $el_product.find('#quantity').val(quantity + 1);
        });

        $el_product.find('.quantity-left-minus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($el_product.find('#quantity').val());
            if(quantity>0){
              $el_product.find('#quantity').val(quantity - 1);
            }
        });

      });

    }

    $(document).ready(function() {

      searchPopup();
      initProductQty();

      var swiper = new Swiper(".main-swiper", {
        speed: 500,
        navigation: {
          nextEl: ".swiper-arrow-prev",
          prevEl: ".swiper-arrow-next",
        },
      });         

      var swiper = new Swiper(".product-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: "#mobile-products .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
      });      

      var swiper = new Swiper(".product-watch-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: "#smart-watches .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
      }); 

      var swiper = new Swiper(".testimonial-swiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-arrow-prev",
          prevEl: ".swiper-arrow-next",
        },
      }); 

    }); // End of a document ready

})(jQuery);

// Function to get the current date, time, and geolocation
function getDateTimeLocation() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  const currentDate = date.toLocaleDateString();
  
  // Use Geolocation API to get the current location
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          
          // Set the content for the ticker
          const tickerContent = `
              Date: ${currentDate} | Time: ${currentTime} | Location: Latitude ${latitude.toFixed(2)}, Longitude ${longitude.toFixed(2)}
          `;
          document.getElementById("ticker-content").innerText = tickerContent;
      }, (error) => {
          console.error("Error getting geolocation:", error);
          const tickerContent = `
              Date: ${currentDate} | Time: ${currentTime} | Location: Unknown
          `;
          document.getElementById("ticker-content").innerText = tickerContent;
      });
  } else {
      const tickerContent = `
          Date: ${currentDate} | Time: ${currentTime} | Location: Not available
      `;
      document.getElementById("ticker-content").innerText = tickerContent;
  }
}

// Update the ticker every 1 second to keep the time up-to-date
setInterval(getDateTimeLocation, 1000);

// Initialize the ticker when the page loads
getDateTimeLocation();


// Get the current visitor count from localStorage, or default to 0 if not found
let visitorCount = localStorage.getItem("visitorCount");
if (!visitorCount) {
    visitorCount = 0; // Initialize if it's the first visit
} else {
    visitorCount = parseInt(visitorCount);
}

// Increment the count for each visit
visitorCount++;

// Update the visitor count in the page
document.getElementById("visitor-count").innerText = visitorCount;

// Store the new count in localStorage to persist across page reloads
localStorage.setItem("visitorCount", visitorCount);
