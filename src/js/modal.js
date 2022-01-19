var linkArray = document.querySelectorAll('.js-open-modal');
var overlay = document.querySelector('.js-modal-overlay');
var crossArray = document.querySelectorAll('.js-close-modal,.header-nav__link,.header-nav__btn--menu');
var modalArray = document.querySelectorAll('.js-modal');

linkArray.forEach(function (item) {
  item.addEventListener('click', function (event) {
    //  предотвращает стандартное действие <a>
    event.preventDefault();
    var modalName = this.getAttribute('data-modal');
    var modal = document.querySelector(".js-modal[data-modal='" + modalName + "']");

    modal.classList.add('is-open');
    overlay.classList.add('is-open');
  });
});

crossArray.forEach(function (cross) {
  cross.addEventListener('click', function () {
    let parent = this.closest('.js-modal');

    parent.classList.remove('is-open');
    if (!cross.classList.contains('btn')) overlay.classList.remove('is-open');
  });
});

overlay.addEventListener('click', function () {
  overlay.classList.remove('is-open');

  modalArray.forEach(function(item) {
    item.classList.remove('is-open')
  })
});