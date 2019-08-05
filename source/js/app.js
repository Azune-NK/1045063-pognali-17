var pageHeader = document.querySelector('.page-header'),
    navMain = document.querySelector('.main-nav'),
    navToggle = document.querySelector('.main-nav__toggle');

pageHeader.classList.remove('page-header--white');
pageHeader.classList.remove('page-header--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    pageHeader.classList.add('page-header--white');
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    pageHeader.classList.remove('page-header--white');
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
