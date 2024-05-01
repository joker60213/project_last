import Swiper from 'swiper';
import SwiperCore, {Navigation, Pagination} from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

let isOn;

let SwiperReload = function () {
  if (document.documentElement.clientWidth < 768 && isOn !== 1) {
    let swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoheight: true,
      slidesPerView: "auto",
    });
    isOn = 1;
  }else if (document.documentElement.clientWidth >= 768 && isOn === 1) {
    isOn = 0
    document.location.reload()
  }
}

window.addEventListener('resize', function () {
  SwiperReload();
});











