$(document).ready(function () {
  //Start spinner
  $(".loader ").fadeOut("slow");
  //End spinner

  //Start wowJs
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
    });
    wow.init();
  //End wowJs

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

  //Start search btn
  let searchBtn = document.querySelector('.search-btn'),
    searchInput = document.querySelector('.search-input');

    searchBtn.addEventListener('click', function() {
      searchInput.classList.toggle('search-active');
  });
  //End search btn

  //Start nave-bar fixed
  let navBar = document.querySelector('.nav-bar'),
      // mainMenuA = document.querySelectorAll('.main-menu ul li a')
      navBarHeight = navBar.offsetHeight;

  window.addEventListener('scroll', fixedMenu);

  function fixedMenu () {
    if (window.pageYOffset >= navBarHeight + 10) {
      navBar.classList.add('fixed-menu');
      // for (i = 0 ; i<= mainMenuA.length ; i++) {
      //   mainMenuA[i].classList.add('less-padding');
      // }
    } else {
      navBar.classList.remove('fixed-menu');
      // for (i = 0 ; i<= mainMenuA.length ; i++) {
      //   mainMenuA[i].classList.remove('less-padding');
      // }
    }
  };
  //Start nave-bar fixed

  //Start Back To Top Button
  //Get the button
  let myButton = document.querySelector(".btn-back-to-top");
  //Use if to show button
  window.onscroll = function () {
  if (window.pageYOffset >= 500) {
      myButton.classList.add('active');
  } else {
      myButton.classList.remove('active');
    }
  };

  //back to top
  myButton.onclick = function () {
  'use strict';
  window.scrollTo(0, 0);
  };
  //End Back To Top Button

  //Start swiper-1
  var mainSlider = new Swiper('.mainSlider', {
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
      el: '.mainSlider-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.mainSlider-button-next',
      prevEl: '.mainSlider-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  //End swiper-1

  //Start swiper-2
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      }
    },
  });
  //End swiper-2

  //Start swiper-3
  var leftSwiper = new Swiper(".leftSwiper", {
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".leftSwiper-pagination",
      clickable: true
    },
  });
  //End swiper-3
});