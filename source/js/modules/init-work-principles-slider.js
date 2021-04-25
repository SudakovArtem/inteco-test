const initWorkPrinciplesSlider = () => {
  const workPrinciplesSliderElem = document.querySelector('.work-principles__slider');

  if (!workPrinciplesSliderElem) {
    return;
  }

  const breakpointSm = window.matchMedia('(max-width: 700px)');
  const btnNext = workPrinciplesSliderElem.querySelector('.slider-controls__btn');
  const workPrinciplesSliderSettings = {
    slidesPerView: 1,
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

    slideClass: 'work-principles__slide',
    slideActiveClass: 'work-principles__slide--active',
    slideNextClass: 'work-principles__slide--next',
    slidePrevClass: 'work-principles__slide--prev',
    slideVisibleClass: 'work-principles__slide--visible',
    wrapperClass: 'work-principles__slider-wrap',
  };

  let workPrinciplesSlider = new Swiper(workPrinciplesSliderElem, workPrinciplesSliderSettings);

  const breakpointChecker = () => {
    workPrinciplesSlider.destroy();
    workPrinciplesSlider = new Swiper(workPrinciplesSliderElem, workPrinciplesSliderSettings);
  };
  breakpointSm.addListener(breakpointChecker);
  breakpointChecker();
};


export {initWorkPrinciplesSlider};
