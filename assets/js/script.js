
function menuShow() {

    let menuMobile = document.querySelector('.mobile-menu');

    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src="/assets/img/menu_white_36dp.svg";
    }

    else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src="/assets/img/close_white_36dp.svg";
    }
}

// Obtém os elementos do carrossel
const carouselWrapper = document.querySelector('.main-sectionOneTwo-divTwo-wrapper');
const carouselCards = document.querySelectorAll('.main-sectionOneTwo-divTwo-card');
const prevBtn = document.querySelector('.main-sectionOneTwo-prev-btn');
const nextBtn = document.querySelector('.main-sectionOneTwo-next-btn');

let currentSlide = 0;

function showSlide(slideIndex) {
  carouselWrapper.style.transform = `translateX(-${slideIndex * 295}px)`; // 310 é a largura do slide (300 + 10 de margem)
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

function nextSlide() {
  if (currentSlide < carouselCards.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}