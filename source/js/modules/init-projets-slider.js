const initProjectsSlider = () => {
  const projectsSliderElem = document.querySelector('.projects__slider');

  if (!projectsSliderElem) {
    return;
  }

  const breakpointSm = window.matchMedia('(max-width: 700px)');
  const btnNext = document.querySelector('.projects__slider-controls .slider-controls__btn');
  const projectsSliderSettings = {
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

    slideClass: 'projects__slide',
    slideActiveClass: 'projects__slide--active',
    slideNextClass: 'projects__slide--next',
    slidePrevClass: 'projects__slide--prev',
    slideVisibleClass: 'projects__slide--visible',
    wrapperClass: 'projects__slider-wrap',
  };

  let projectsSlider = new Swiper(projectsSliderElem, projectsSliderSettings);

  const breakpointChecker = () => {
    projectsSlider.destroy();
    projectsSlider = new Swiper(projectsSliderElem, projectsSliderSettings);
  };
  breakpointSm.addListener(breakpointChecker);
  breakpointChecker();
};


export {initProjectsSlider};
