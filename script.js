// navbar settings
const navBar = document.getElementById("navbar");
var menuButton = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  navBar.classList.toggle("show");
  menuButton.classList.toggle("fa-times");
});
window.onscroll = function () {
  navBar.classList.remove("show");
  menuButton.classList.remove("fa-times");
};

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

// image changer
const mainImg = document.querySelector("#mainImg");
const subImg = document.getElementsByClassName("smallImg");

subImg[0].onclick = function () {
  mainImg.src = subImg[0].src;
};
subImg[1].onclick = function () {
  mainImg.src = subImg[1].src;
};
subImg[2].onclick = function () {
  mainImg.src = subImg[2].src;
};
subImg[3].onclick = function () {
  mainImg.src = subImg[3].src;
};
subImg[4].onclick = function () {
  mainImg.src = subImg[4].src;
};
