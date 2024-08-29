let nav = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  nav.classList.toggle("active");
  searchitem.classList.remove("active");
  cartitem.classList.remove("active");
};

let searchitem = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchitem.classList.toggle("active");
  nav.classList.remove("active");
  cartitem.classList.remove("active");
};

let cartitem = document.querySelector(".cart-item-container");
document.querySelector("#cart-btn").onclick = () => {
  cartitem.classList.toggle("active");
  nav.classList.remove("active");
  searchitem.classList.remove("active");
};

window.onscroll = () => {
  nav.classList.remove("active");
  searchitem.classList.remove("active");
  cartitem.classList.remove("active");
};
