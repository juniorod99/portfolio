const swiper = new Swiper(".card-container", {
  // Optional parameters
  direction: "horizontal",
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// const swiper = new Swiper(".card-container", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     320: {
//       spaceBetween: 20,
//     },
//     768: {
//       spaceBetween: 20,
//     },
//     992: {
//       spaceBetween: 20,
//     },
//   },
// });
