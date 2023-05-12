
const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.header-nav');
burgerEl.addEventListener("click", function() {
  menuEl.classList.toggle('header-nav_hidden');  
} );


const footerYearEl = document.querySelector('.footer__year');
let today = new Date();
let year = today.getFullYear(); // 2023

footerYearEl.textContent = year;
