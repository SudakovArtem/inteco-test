const initCompanySlider = () => {
  const companySliderElem = document.querySelector('.company__slider');

  if (!companySliderElem) {
    return;
  }

  const breakpointSm = window.matchMedia('(max-width: 700px)');
  const btnNext = document.querySelector('.company__slider-controls .slider-controls__btn');
  const companySliderSettings = {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    speed: 500,

    navigation: {
      nextEl: btnNext,
      disabledClass: 'slider-controls__btn--disabled',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    slideClass: 'company__slide',
    slideActiveClass: 'company__slide--active',
    slideNextClass: 'company__slide--next',
    slidePrevClass: 'company__slide--prev',
    slideVisibleClass: 'company__slide--visible',
    wrapperClass: 'company__slider-wrap',
  };

  let companySlider = new Swiper(companySliderElem, companySliderSettings);

  const breakpointChecker = () => {
    companySlider.destroy();
    companySlider = new Swiper(companySliderElem, companySliderSettings);
  };
  breakpointSm.addListener(breakpointChecker);
  breakpointChecker();
};


export {initCompanySlider};
