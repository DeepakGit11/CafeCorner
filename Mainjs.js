//slider buttons//
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const slider = document.querySelector('.slider1');
const allImages = document.querySelector('.images1');

btn1.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-0px)';
});

btn2.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-101.5%)';
});

btn3.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-203.5%)';
});

btn4.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-305%)';
});
//automatic slider//


const slidera = document.querySelector('.slider1');
const allImagesa = document.querySelector('.images1');
let slideIndex = 0;
const totalSlides = 4;

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  allImages.style.transform = `translateX(-${slideIndex * 101.7}%)`;
}

setInterval(nextSlide, 3000);


//fixed nav //

window.onscroll = function() {
    myFunction();
  };
  
  var navbar = document.getElementById("navbar");
  var viewportHeight = window.innerHeight;
  
  function myFunction() {
    if (window.pageYOffset >= viewportHeight) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  }
  