let readMoreBtn = document.querySelector('.about__read-more-btn');
let hiddenList = document.querySelector('.about__text--hidden-xs');
window.addEventListener('resize', function () {
  hideList()
});

readMoreBtn.addEventListener('click', function () {
  if (readMoreBtn.textContent === 'Читать далее') {
    readMoreBtn.textContent = 'Скрыть';
    hiddenList.classList.add('show-hidden-text');
  } else {
    readMoreBtn.textContent = 'Читать далее';
    hiddenList.classList.remove('show-hidden-text');
  }
})







