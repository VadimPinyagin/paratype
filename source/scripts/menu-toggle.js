const toggleMenu = () => {
  document.querySelector('.header__nav').classList.remove('main-nav--nojs');

  const btnBurger = document.querySelector('.btn-burger');
  const mainNav = document.querySelector('.nav');

  mainNav.classList.add('nav__list--is-close');

  if (btnBurger) {
    btnBurger.addEventListener('click', () => {
      mainNav.classList.toggle('nav__list--is-open');
      mainNav.classList.toggle('nav__list--is-close');
    });
  }
};

export {toggleMenu};
