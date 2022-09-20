$(document).ready(function () {
  //Start spinner
  $(".loader ").fadeOut("slow");
  //End spinner

  //Start WOW js
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
  }
  )
  wow.init();
  //End WOW js

  //Start burger menu
  let btn = document.querySelector('.toggle-btn'),
      mainMenu = document.querySelector('.main-menu'),
      ul = document.querySelector('.main-menu ul');

      btn.addEventListener('click', function() {
          btn.classList.toggle('active-toggle-btn');
          mainMenu.classList.toggle('main-menu-active');
          ul.classList.toggle('height');
      });
  //End burger menu

  //Start search btn
  let searchBtn = document.querySelector('.search-btn'),
    searchInput = document.querySelector('.search-input');

    searchBtn.addEventListener('click', function() {
      searchInput.classList.toggle('search-active');
  });
  //End search btn

  //Start sub-menu active
  let dropLi = document.querySelectorAll('li.drop-li'),
      subMenu = document.querySelectorAll('ul.sub-menu');

  for(let i = 0; i < dropLi.length; i++) {
          
    dropLi[0].addEventListener('click', function() {
      for(let j = 0; j < subMenu.length; j++) {
        subMenu[0].classList.toggle('sub-menu-active');
      }
    });

      dropLi[1].addEventListener('click', function() {
      for(let j = 0; j < subMenu.length; j++) {
        subMenu[1].classList.toggle('sub-menu-active');
      }
    });

    dropLi[2].addEventListener('click', function() {
      for(let j = 0; j < subMenu.length; j++) {
        subMenu[2].classList.toggle('sub-menu-active');
      }
    });
  }
  // if (subMenu[j].classList.contains('sub-menu-active')) {
  //   subMenu[j].classList.remove('sub-menu-active');
  //   } else {
  //     subMenu[j].classList.add('sub-menu-active');
  //   }
  //End sub-menu active

  //Start swiperjs
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 600,
    parallax: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  //End swiperjs

  //Start Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
  })
  //End Owl Carousel

});