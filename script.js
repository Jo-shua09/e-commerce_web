// swiper settings
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "",
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".shop-items", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// navbar
const menuBtn = document.getElementById("menu-btn");
const navBar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("show");
  menuBtn.classList.add("fa-times");
});
window.onscroll = function () {
  navBar.classList.remove("active");
};

// const navbar = document.querySelector(".navbar");
// const menuBtn = document.querySelector("#menu-btn");

// let navbarOpen = false;

// menuBtn.addEventListener("click", () => {
//   navbar.classList.toggle("showNav");
//   navbarOpen = !navbarOpen;
// });

// window.onscroll = function () {
//   if (navbarOpen) {
//     navbar.classList.remove("showNav");
//     navbarOpen = false;
//   }
// };
