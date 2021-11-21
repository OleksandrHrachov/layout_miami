'use strict';

const menu = document.querySelector('.menu');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

menu.addEventListener('keydown', (event) => {
  if (event.keyCode === 9) {
    event.preventDefault();
  }
});
