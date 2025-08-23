'use strict';

/* slider */
window.addEventListener('DOMContentLoaded', () => {

    const slide = document.querySelector('.case-item-slider'),
          slideWidth = slide.offsetWidth,
          slideMarginRight = window.getComputedStyle(slide).marginRight,
          slides = document.querySelectorAll('.case-item-slider'),
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

/* lazy loading */
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll('img.lazy');

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback for browsers that do not support IntersectionObserver
        let lazyLoadThrottleTimeout;
        function lazyLoad() {
            if (lazyLoadThrottleTimeout) {
                clearTimeout(lazyLoadThrottleTimeout);
            }

            lazyLoadThrottleTimeout = setTimeout(function() {
                let scrollTop = window.pageYOffset;
                lazyImages.forEach(function(img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                if (lazyImages.length == 0) {
                    document.removeEventListener("scroll", lazyLoad);
                    window.removeEventListener("resize", lazyLoad);
                    window.removeEventListener("orientationchange", lazyLoad);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
    }
});

