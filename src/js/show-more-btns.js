const changeSizeBtns = document.querySelectorAll('.change-size-btn');
const sliderWrappers = document.querySelectorAll('.slider__wrapper');


for (let i = 0; i < changeSizeBtns.length; i++) {
  changeSizeBtns[i].addEventListener('click', function () {
    showHideListFunc(i);
  });
}

for (let i = 0; i < changeSizeBtns.length; i++) {
  window.addEventListener('resize', function ()  {
  hideList(i)
  });
}


let showList = function (i)  {
  changeSizeBtns[i].textContent = 'Скрыть';
  sliderWrappers[i].classList.add('show');
}

let hideList = function (i)  {
  changeSizeBtns[i].textContent = 'Показать все';
  sliderWrappers[i].classList.remove('show');
}

let showHideListFunc = function (i)  {
  if (changeSizeBtns[i].textContent === 'Показать все') {
    showList(i)
  } else {
    hideList(i)
  }
}
