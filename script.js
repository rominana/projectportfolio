/* eslint-disable no-plusplus */
const hamburgerButton = document.getElementById('menu-btn');

hamburgerButton.addEventListener('click', () => {
  document.getElementById('main').className += ' display-menu';
  document.getElementById('logo').className += ' display-menu';
  document.getElementById('hamburguer').className += ' display-menu';
  document.getElementsByClassName('nav-content')[0].classList.add('display-menu');
  document.getElementsByClassName('nav-items')[0].classList.add('display-menu');
  document.getElementsByClassName('equis')[0].classList.add('display-menu');

  for (let i = 0; i < document.getElementsByClassName('nav-item').length; i++) {
    document.getElementsByClassName('nav-item')[i].classList.add('display-menu');
  }
});

const closeButton = document.getElementsByClassName('equis')[0];

function closeMenu() {
  document.getElementById('main').classList.remove('display-menu');
  document.getElementById('logo').classList.remove('display-menu');
  document.getElementById('hamburguer').classList.remove('display-menu');
  document.getElementsByClassName('nav-content')[0].classList.remove('display-menu');
  document.getElementsByClassName('nav-items')[0].classList.remove('display-menu');
  document.getElementsByClassName('equis')[0].classList.remove('display-menu');

  for (let i = 0; i < document.getElementsByClassName('nav-item').length; i++) {
    document.getElementsByClassName('nav-item')[i].classList.remove('display-menu');
  }
}

closeButton.addEventListener('click', () => {
  closeMenu();
});

const closeMenuElements = document.getElementsByClassName('nav-item');

for (let i = 0; i < closeMenuElements.length; i++) {
  closeMenuElements[i].addEventListener('click', () => {
    closeMenu();
  });
}