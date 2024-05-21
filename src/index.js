import './style.css';
import Coke from './images/coke.jpg'
import Pepsi from './images/pepsi.webp';
import Sprite from './images/sprite.webp';
import DrPepper from './images/dr_pepper.jpg';
import Schweppes from './images/schweppes.webp';

const container = document.querySelector('.container');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const imageElements = container.children;
const imageList = [Coke, Pepsi, Sprite, DrPepper, Schweppes]
const navbar = document.querySelector('.navbar')
const navigationDots = document.querySelectorAll('.dots a');
let index = 0;

function appendImage(images, element) {
  for (const image of images) {
    const currentImage = new Image();
    currentImage.src = image;

    element.appendChild(currentImage);
  }
}

function clearNavDots() {
  navigationDots.forEach((dot) => {
    dot.classList.remove('active');
  })
}

function resetSlides() {
  index = 0;
  imageElements[index].classList.add('visible');
  navigationDots[index].classList.add('active');

}

function nextSlide() {
  imageElements[index].classList.remove('visible');
  clearNavDots();

  // use mod to reset index back to 0
  index = (index + 1) % imageElements.length;

  imageElements[index].classList.add('visible');
  navigationDots[index].classList.add('active');
}

// use setInterval instead of setTimeout and loop
function delayNextSlide() {
  setInterval(() => {
    nextSlide();
  }, 5000);
}

rightButton.addEventListener('click', () => {
  nextSlide();
})

leftButton.addEventListener('click', () => {
  if (index - 1 >= 0) {
    imageElements[index].classList.remove('visible');
    clearNavDots();

    index--

    imageElements[index].classList.add('visible');
    navigationDots[index].classList.add('active');
  }
})


navbar.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'a') {
    clearNavDots();

    [...imageElements].forEach((image) => {
      image.classList.remove('visible');
    })

    e.target.classList.add('active');

    index = e.target.dataset.index;
    imageElements[index].classList.add('visible');
  }
})

appendImage(imageList, container);
resetSlides();
delayNextSlide();
