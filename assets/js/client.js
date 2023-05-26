/**

* Template Name: Flexor - v4.8.0

* Template URL: https://bootstrapmade.com/flexor-free-multipurpose-bootstrap-template/

* Author: BootstrapMade.com

* License: https://bootstrapmade.com/license/

*/

(function() {

 

 



    /**
  
     * Clients Slider
  
     */
  
    new Swiper('.clients-slider', {
  
      speed: 100,
  
      loop: true,
  
      autoplay: {
  
        delay: 1000,
  
        disableOnInteraction: false
  
      },
  
      slidesPerView: 'auto',
  
      pagination: {
  
        el: '.swiper-pagination',
  
        type: 'bullets',
  
        clickable: true
  
      },
  
      breakpoints: {
  
        320: {
  
          slidesPerView: 2,
  
          spaceBetween: 40
  
        },
  
        480: {
  
          slidesPerView: 3,
  
          spaceBetween: 60
  
        },
  
        640: {
  
          slidesPerView: 4,
  
          spaceBetween: 80
  
        },
  
        992: {
  
          slidesPerView: 6,
  
          spaceBetween: 120
  
        }
  
      }
  
    });
  
  
  
   
  
  
  
  
  
  
   
  
  
  
  
  
    /**
  
     * Animation on scroll
  
     */
  
    window.addEventListener('load', () => {
  
      AOS.init({
  
        duration: 5000,
  
        easing: 'ease-in-out',
  
        once: true,
  
        mirror: false
  
      })
  
    });
  
  
  
  })()
  