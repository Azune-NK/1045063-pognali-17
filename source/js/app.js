var pageHeader = document.querySelector(".page-header"),
    navMain = document.querySelector(".main-nav"),
    navToggle = document.querySelector(".main-nav__toggle"),
    bizPricingModal = document.querySelector(".modal"),
    bizPricingOpen = document.querySelector(".pricing__btn"),
    bizPricingClose = document.querySelector(".biz-pricing__button");

pageHeader.classList.remove("page-header--white");
pageHeader.classList.remove("page-header--nojs");
navMain.classList.remove("main-nav--opened");
navMain.classList.remove("main-nav--nojs");
navMain.classList.add("main-nav--closed");

navToggle.addEventListener("click", function (/* Вопрос почему тут работает без названия функции, а когда функции ниже тоже были без названия - они не работали? */) {
  if (navMain.classList.contains("main-nav--closed")) {
    pageHeader.classList.add("page-header--white");
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    pageHeader.classList.remove("page-header--white");
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

bizPricingOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  bizPricingModal.classList.add("modal--opened");
  bizPricingClose.focus(); /* Вопрос - если так не делать(табиндекс кстати не работает) - то чтобы через таб добраться до кнопки закрытия - уйдут годы - как обычно такой кейс решается? */
});

bizPricingClose.addEventListener("click", function (evt) {
  bizPricingModal.classList.remove("modal--opened");
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (bizPricingModal.classList.contains("modal--opened")) {
      bizPricingModal.classList.remove("modal--opened");
    }
  }
});
