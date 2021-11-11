AOS.init();
const menu = document.querySelectorAll(".card");
const container = document.querySelector(".container");
const disc = document.getElementById("promo");


const link1 = document.getElementById("home");
const link2 = document.getElementById("menu");
const link3 = document.getElementById("disc");
const link4 = document.getElementById("order");

const promo = document.querySelectorAll('.isi');

const burger = document.querySelector('.burger');
const nav = document.querySelector(".drop");
const dropDown = document.querySelector('nav ul');

const home = document.querySelectorAll(".home-text");
const order = document.querySelectorAll(".order-text");




link2.addEventListener("click", function () {
  menu.forEach(function (card) {
    dropDown.classList.remove("slide");
    card.classList.add("food")
    setTimeout(function () {
      card.classList.remove("food");
    }, 2000);
  });
});

link3.addEventListener("click", function () {
  dropDown.classList.remove("slide");
  promo.forEach(function(p){
  p.classList.add('zag');
  setTimeout(function(){
    p.classList.remove('zag');
  }, 1700);
});
  
});

link4.addEventListener("click", function(){
  dropDown.classList.remove("slide");
  order.forEach(function(o){
    o.classList.add("pop");
  setTimeout(function(){
    o.classList.remove("pop");
  }, 1500);
  })
  
});

nav.addEventListener('click', function(){
  dropDown.classList.toggle("slide");
});

// Paralax
window.addEventListener("scroll", function(){
  const wScroll = this.scrollY;
  home.forEach(function(h){
    h.style.transform = "translate(0, "+ wScroll/4 +"%)";
  });
});
