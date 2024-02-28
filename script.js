function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 4000);
}
window.onload = fadeOut;

// navbar settings
const navBar = document.getElementById("navbar");
const menuButton = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  navBar.classList.toggle("show");
  menuButton.classList.toggle("fa-times");
});

// close and open cart
const cartOpen = document.querySelectorAll("#cart-icon");
cartOpen.forEach((btn) => {
  btn.addEventListener("click", handle_openCart);
});
const cartItems = document.querySelector("#cart-items");
const cartClose = document.querySelector("#close-cart");
const nav = document.getElementById("navbar");
const addCart_btns = document.querySelectorAll("#addbtn");

function handle_openCart() {
  cartItems.classList.add("showCart");
  nav.classList.add("remove");
}
cartClose.onclick = function () {
  cartItems.classList.remove("showCart");
  nav.classList.remove("remove");
};
window.onscroll = function () {
  navBar.classList.remove("show");
  menuButton.classList.remove("fa-times");
};

//================ ADD ITEMS TO CART/ ALL CART SETTINGS ==================
//================ ADD ITEMS TO CART/ ALL CART SETTINGS ==================
//================ ADD ITEMS TO CART/ ALL CART SETTINGS ==================
// starts when the document is ready
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

// =========== start ==============
function start() {
  addEvents();
}

// =========== update ==============
function update() {
  addEvents();
  updateTotals();
}

// =========== addEvents ==============
function addEvents() {
  const cartRemove_btns = document.querySelectorAll(".remove-items");
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener("click", handle_removerCartItem);
  });

  // =========== change item quantity ==============
  let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
  cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handle_changeItemQuantity);
  });

  // ============== add items to cart =================
  let addCart_btns = document.querySelectorAll(".addBtn");
  addCart_btns.forEach((btn) => {
    btn.addEventListener("click", handle_addCartItem);
  });

  //================ check out =========================
  const checkOut_btn = document.querySelector(".checkOut");
  checkOut_btn.addEventListener("click", handle_checkOut);
}

// ============= HANDLE EVENTS FUNCTIONS =============
let itemsAdded = [];

function handle_addCartItem() {
  product = this.parentElement;
  let title = product.querySelector(".product-title").innerHTML;
  let price = product.querySelector("#prices").innerHTML;
  let imgSrc = product.querySelector(".product-img").src;
  console.log(title, price, imgSrc);

  let newToAdd = {
    title,
    price,
    imgSrc,
  };

  // handle item  already exist
  if (itemsAdded.find((el) => el.title == newToAdd.title)) {
    alert("Product Already In Cart!");
    return;
  } else {
    itemsAdded.push(newToAdd);
  }

  let cartBoxElement = cartBoxComponent(title, price, imgSrc);
  let newNode = document.createElement("div");
  newNode.innerHTML = cartBoxElement;
  const cartContent = document.querySelector(".cart-content");
  cartContent.appendChild(newNode);

  update();
}

function handle_removerCartItem() {
  this.parentElement.remove();
  itemsAdded = itemsAdded.filter(
    (el) =>
      el.title !=
      this.parentElement.querySelector(".cart-product-title").innerHTML
  );

  update();
}

function handle_changeItemQuantity() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value); //to keep it in an integer value

  update();
}

function handle_checkOut() {
  if (itemsAdded.length <= 0) {
    alert("Your Cart Is Empty! 'add products to cart'");
  }
  const cartContent = document.querySelector(".cart-content");
  cartContent.innerHTML = "";
  alert("Successfully Check Out Product(s)");
  itemsAdded = [];
  update();
}

function updateTotals() {
  let cartBoxes = document.querySelectorAll(".cart-box");
  const totalElement = document.querySelector(".totalA");
  const totalElementB = document.querySelector(".totalB");
  let total = 0;
  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("$", ""));
    let quantity = cartBox.querySelector(".cart-quantity").value;

    total += price * quantity;
  });

  total = total.toFixed(2); // to made it a decimal of 2 numbers

  totalElement.innerHTML = "$" + total;
  totalElementB.innerHTML = "$" + total;
}

function cartBoxComponent(title, price, imgSrc) {
  return `
  <div class="cart-box">
   <img src=${imgSrc} alt="" class="cart-img" />
   <div class="detail-box">
     <div class="cart-product-title">${title}</div>
     <div class="cart-price">${price}</div>
     <div class="cart-size">
       <select name="size" id="select">
         <option value="small">S</option>
         <option value="medium">M</option>
         <option value="large">L</option>
         <option value="extra large">XL</option>
         <option value="extrra extra">XXL</option>
       </select>
     </div>
     <input type="number" value="1" class="cart-quantity" />
   </div>
   <i class="fas fa-trash remove-items"></i>
 </div>`;
}
//================ ADD ITEMS TO CART/ ALL CART SETTINGS ==================
//================ ADD ITEMS TO CART/ ALL CART SETTINGS ==================
//================ ADD ITEMS TO CART/ ALL CART SETTINGS ==================

//swiper settings
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

//image changer
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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
