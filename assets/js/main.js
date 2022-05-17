let $ = document;

// nav main

let qualityFoodSide = $.querySelectorAll('.quality-food-side')
let dots = $.querySelectorAll(".dot");

// slider
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  if (n > qualityFoodSide.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = qualityFoodSide.length;
  }
  for (i = 0; i < qualityFoodSide.length; i++) {
    qualityFoodSide[i].style.display = "none";
  }
  qualityFoodSide[slideIndex - 1].style.display = "block";
}

// autoplay slider
let slideIndexAuto = 0;
showSlidesAuto();
function showSlidesAuto() {
  for (let i = 0; i < qualityFoodSide.length; i++) {
    qualityFoodSide[i].style.display = "none";  
  }
  slideIndexAuto++;
  if (slideIndexAuto > qualityFoodSide.length) {
    slideIndexAuto = 1
  }  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  qualityFoodSide[slideIndexAuto - 1].style.display = "block";  
  dots[slideIndexAuto - 1].className += " active-dot";
  setTimeout(showSlidesAuto, 6000);
}

// our special menu
let ourSpecials = $.querySelectorAll('.nav-our-speciality-menu-btn')
let ourSpecialMenu = $.querySelectorAll('.our-speciality-menu')
let current = 0
let beforeCurrent = 0
const showPanel = (panelIndex, category) => {
  beforeCurrent = current;
  current = panelIndex
  // active
  ourSpecials[current].classList.add('active')
  ourSpecials[beforeCurrent].classList.remove('active')
  // ourSpecialMenu
  for (let i = 0; i < ourSpecialMenu.length; i++) {
    ourSpecialMenu[i].style.display = "none";
  }
  document.getElementById(category).style.display = 'block'
  // animation
  ourSpecials[current].classList.add('our-specility-menu-btn-animation')
  ourSpecials[beforeCurrent].classList.add('our-specility-menu-btn-animation-out')
}

// our best chef




// custom reviews
let customCard = $.querySelectorAll('.custom-card')
let dotCustom = $.querySelectorAll('.dot-custom') 

let slideCustomIndexAuto = 0;
showCustomSlidesAuto();
function showCustomSlidesAuto() {
  for (let i = 0; i < customCard.length; i++) {
    customCard[i].classList.toggle('active-reviews')
  }
  slideCustomIndexAuto++;
  if (slideCustomIndexAuto > customCard.length) {
    slideCustomIndexAuto = 1
  }  
  for (let i = 0; i < dotCustom.length; i++) {
    dotCustom[i].className = dotCustom[i].className.replace(" active-dot", "");
  }
  customCard[slideCustomIndexAuto - 1].style.display = "flex";
  dotCustom[slideCustomIndexAuto - 1].className += " active-dot";
  setTimeout(showCustomSlidesAuto, 4000);
}