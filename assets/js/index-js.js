const swiper = new Swiper('.sample-slider', {
    loop: true,                         
    effect: "cube",                     //add(make slider cube
    grabCursor: true,                   //add(grab cursor
    speed: 1000,                        //add(slide speed
    autoplay: {                         
        delay: 1500,  
    },                   
    pagination: {                       
        el: '.swiper-pagination',
    },
    navigation: {                       
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

const swiper2 = new Swiper('.sample-slider-2', {
    loop: true,                         
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {                         
      delay: 10000,  
  },  
    pagination: {
      el: ".swiper-pagination",
	clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });


  const swiper3 = new Swiper(".swiper3", {
    autoplay: false,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });

  const swiper4 = new Swiper(".swiper4", {
    slidesPerView: 1,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
      enabled: true
    },

  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,
      clickable: true
    },
  
    // If we need navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1.25,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }

  });


const swiper5 = new Swiper('.sample-slider-5', {
  loop: true,                         
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

const swiper6 = new Swiper('.sample-slider-6', {
  loop: true,                         
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});


const swiper7 = new Swiper(".sample-slider-7", {
  slidesPerView: "auto",
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {

    1024: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  }
});
  /******************************************************************* podcast****/
  "use strict";

const options = {
  defaultSpeed: "1.00",
  speeds: ["1.25", "1.50", "2.00", "0.75"],
  loop: true,
  skipBackInterval: 15,
  jumpForwardInterval: 15,
  features: [
    "playpause",
    "progress",
    "current",
    "duration",
    "skipback",
    "changespeed",
    "volume",
    "jumpforward"
  ]
};

new MediaElementPlayer(document.querySelector("audio"), options);

// Separate the audio controls so I can style them better.
(() => {
  const elementTop = document.createElement("div");
  const elementBottom = document.createElement("div");
  elementTop.classList.add("mejs-prepended-buttons");
  elementBottom.classList.add("mejs-appended-buttons");

  const controls = document.querySelector(".mejs__controls");
  controls.prepend(elementTop);
  controls.append(elementBottom);

  const controlsChildren = Array.from(controls.childNodes).filter((v) =>
    v.className.startsWith("mejs_")
  );

  controlsChildren.slice(0, 3).forEach((elem) => {
    elementTop.append(elem);
  });

  controlsChildren.slice(3, controlsChildren.length).forEach((elem) => {
    elementBottom.append(elem);
  });
})();


  
