var navMain = document.querySelector('.main-nav--nojs');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  console.log('нажата кнопка открытия меню');
  if (navMain.classList.contains('main-nav--closed')) {
    console.log("основная ветвь");
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    console.log("основная ветвь");
  } else {
    console.log("заходим в ветвть иначе");
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
