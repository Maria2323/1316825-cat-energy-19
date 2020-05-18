var button = document.querySelector('.page-header__toggle');
var nav = document.querySelector('.main-nav');
var clickHandler = function() {
  nav.classList.toggle('main-nav__hidden');
  button.classList.toggle('page-header__toggle-hidden');
};
button.addEventListener('click', clickHandler);
