var linkArray = document.querySelectorAll('.js-open-modal');
var overlay = document.querySelector('.js-modal-overlay');
var crossArray = document.querySelectorAll('.js-close-modal');

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
    var parent = this.parentNode;

    parent.classList.remove('is-open');
    overlay.classList.remove('is-open');
  });
});