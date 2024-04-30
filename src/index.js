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
let index = 0;

function appendImage(images, element) {
  for (const image of images) {
    const currentImage = new Image();
    currentImage.src = image;

    element.appendChild(currentImage);
  }
}

appendImage(imageList, container);

imageElements[index].classList.add('visible');

rightButton.addEventListener('click', () => {
  if (index + 1 < imageElements.length) {
    imageElements[index].classList.remove('visible');

    index++

    imageElements[index].classList.add('visible');
  }
})

leftButton.addEventListener('click', () => {
  if (index - 1 >= 0) {
    imageElements[index].classList.remove('visible');

    index--

    imageElements[index].classList.add('visible');
  }
})

const navbar = document.querySelector('.navbar')
const navigationDots = document.querySelectorAll('.dots a');

navbar.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'a') {
    navigationDots.forEach((dot) => {
      dot.classList.remove('active');
    })
    e.target.classList.add('active');
  }
})
