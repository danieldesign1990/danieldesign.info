'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const slide = document.querySelector('.article-item-slider'),
          slideWidth = slide.offsetWidth,
          slideMarginRight = window.getComputedStyle(slide).marginRight,
          slides = document.querySelectorAll('.article-item-slider'),
          sliderLine = document.querySelector('.slider-line'),
          nextBtn = document.querySelector('.slider-button__right'),
          prevBtn = document.querySelector('.slider-button__left');
    let offset = 0;
    let slideOffset = 0;

    sliderLine.style.transition = '0.5s all';

    slideOffset = +slideWidth + 
    (+slideMarginRight.slice(0, slideMarginRight.length - 2));

    nextBtn.addEventListener('click', () => {
        if (offset == slideOffset * (slides.length - 3)) {
            offset = 0;
        } else {
            offset += slideOffset;
        }

        sliderLine.style.transform = `translateX(-${offset}px)`;
    });

    prevBtn.addEventListener('click', () => {
        if (offset == 0) {
            offset = slideOffset * (slides.length - 3);
        } else {
            offset -= slideOffset;
        }

        sliderLine.style.transform = `translateX(-${offset}px)`;
    });

});

