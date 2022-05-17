const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.header__btn-menu');

menuBtn.addEventListener('click', function() {
  if (menuBtn.classList.contains('header__btn-menu--open')) {
    menuBtn.classList.remove('header__btn-menu--open');
    menuBtn.classList.add('header__btn-menu--close');
    menu.classList.remove('menu');
  }
  else {
    menuBtn.classList.add('header__btn-menu--open');
    menuBtn.classList.remove('header__btn-menu--close');
    menu.classList.add('menu');
  }
})
