// Class of Specified positioned elements
const fixedPos = [...document.querySelectorAll('.fixed-pos')];
// Old values
// const services__gipsDeko__textP_selector = getComputedStyle(document.querySelector('.services__gips-deko__text-p'));
// const services__gipsDeko__textP = {
//   fontSize: parseInt(services__gipsDeko__textP_selector.fontSize) 
// }
// const services__gipsDeko__textUl = getComputedStyle(document.querySelector('.services__gips-deko__text-ul'));
// Ratios of dimensions between window width and coordinates of element
let dimensionsRef = {
        width: 1519,
        'wer-sind': {
            left: 975,
            top: 730,
        },
        'was-bieten': {
            left: 0,
            top: 939,
        },
        'our-vision': {
            left: 45,
            top: 1319,
        },
        shop: {
            right: 40,
            top: 1296.47,
        },
        shop__heading: {
            top: 1130,
            right: 40
        },
        each_place_is_unique: {
            left: 34,
            top: 1565
        },
        'we-design': {
            left: 707,
            top: 1774
        },
        'services__words-table': {
            left: 95.05,
            top: 2037
        },
        services__heading: {
            left: 57,
            top: 2105
        },
        'services__gips-deko': {
            top: 2260
        },
        'services__gips-deko__visual': {
            top: 2295,
            left: 105
        },
        'services__gips-deko__text-ul': {
            top: 2295,
            left: 763
        },
        'services__gips-deko__text-p': {
            top: 2355,
            left: 763
        },
        'services__visualising': {
            top: 2879,
            // left: 736
        },
        'services__visualising__heading': {
            top: 2890,
            left: 76
        },
        'services__visualising__item--1': {
            top: 3055,
            left: 70
        },
        'services__visualising__item--2': {
            top: 3055,
            left: 780
        },
        'services__3d': {
            top: 3473,
            // left: 76
        },
        'services__3d__header': {
            top: 3478,
            left: 76
        },
        'services__3d__imgs': {
            top: 3705,
            right: 69
        },
        'contact__heading': {
            top: 4115,
        },
        'form': {
            top: 4290,
        },
        'footer__line': {
            top: 4960
        },
        'full-row': {
            top: 4960
        },
        'fixed-btns': {
            bottom: 15,
            right: 15
        },
        'services__gips-deko__visual__gallery': {
            top: 2495
        },
        'bg-word': {
            top: 1737
        }
    }
    /****** 
     * 
     * Main Flow and events
     * ******/
    // Handle Fixed ratios
    // Trigger Slider
window.onload = () => {
    if (document.querySelector('.loading')) {
        document.querySelector('.loading').style.opacity = 0;
        setTimeout(() => {
            document.querySelector('.loading').remove();
        }, 500);
    }
    slideV(selectElmnt('.shop__slider-slide'),
        selectElmnt('.shop__slider-arrow--down'),
        selectElmnt('.shop__slider-arrow--up')
    );
    slideH(selectElmnt('.shop__gallery__slider__wrapper'),
        document.getElementsByClassName('shop__gallery__slider__wrapper__slide'),
        selectElmnt('.shop__gallery__arrow--left'),
        selectElmnt('.shop__gallery__arrow--right')
    );
    slideH(
        selectElmnt('.gips-deko__gallery__slider__wrapper'),
        document.getElementsByClassName('gips-deko__gallery__slider__wrapper__slide'),
        selectElmnt('.gips-deko__gallery__arrow--left'),
        selectElmnt('.gips-deko__gallery__arrow--right')
    );
    slideH(
        selectElmnt('.visualising__gallery__slider__wrapper'),
        document.getElementsByClassName('visualising__gallery__slider__wrapper__slide'),
        selectElmnt('.visualising__gallery__arrow--left'),
        selectElmnt('.visualising__gallery__arrow--right')
    );
    slideH(
        selectElmnt('.other3d__gallery__slider__wrapper'),
        document.getElementsByClassName('other3d__gallery__slider__wrapper__slide'),
        selectElmnt('.other3d__gallery__arrow--left'),
        selectElmnt('.other3d__gallery__arrow--right')
    );
};
[...document.querySelectorAll('.overlay_hover_icon')].forEach(elmnt => {
    elmnt.addEventListener('click', () => {
        showGlobalGallery(elmnt);
    });
});
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY < 30) {
        selectElmnt('.fixed-btns').classList.remove('fixed-btns--active');
    } else {
        selectElmnt('.fixed-btns').classList.add('fixed-btns--active');
    }
    // Elements Animation
    // wer-sind
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.wer-sind').offsetTop) {
        selectElmnt('.wer-sind').classList.add('wer-sind--scrolled');
    }
    // was-bieten
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.was-bieten').offsetTop) {
        selectElmnt('.was-bieten').classList.add('was-bieten--scrolled');
    }
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.was-bieten').offsetTop + 75) {
        selectElmnt('.was-bieten .paragraph li:nth-child(1)').classList.add('li--scrolled');
    }
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.was-bieten').offsetTop + 150) {
        selectElmnt('.was-bieten .paragraph li:nth-child(2)').classList.add('li--scrolled');
    }
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.was-bieten').offsetTop + 225) {
        selectElmnt('.was-bieten .paragraph li:nth-child(3)').classList.add('li--scrolled');
    }
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.was-bieten').offsetTop + 300) {
        selectElmnt('.was-bieten .paragraph li:nth-child(4)').classList.add('li--scrolled');
    }
    // We design
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.we-design').offsetTop + 100) {
        selectElmnt('.we-design').classList.add('we-design--scrolled');
    }

    // Shop
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.shop__heading').offsetTop) {
        selectElmnt('.shop__heading').classList.add('shop__heading--scrolled');
    }
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.shop').offsetTop + 100) {
        selectElmnt('.shop .red-badge').classList.add('red-badge--scrolled');
    }
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.shop').offsetTop + 200) {
        selectElmnt('.shop .paragraph').classList.add('paragraph--scrolled');
    }
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.shop').offsetTop + 300) {
        selectElmnt('.shop .shop__slider').classList.add('shop__slider--scrolled');
    }

    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.each_place_is_unique').offsetTop + 300) {
        selectElmnt('.each_place_is_unique').classList.add('each_place_is_unique--scrolled');
    }

    // our vision
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.our-vision').offsetTop + 100) {
        selectElmnt('.our-vision').classList.add('our-vision--scrolled');
    }

    // table
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.services__words-table').offsetTop + 100) {
        selectElmnt('.services__words-table').classList.add('services__words-table--scrolled');
    }

    // services heading
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.services__heading').offsetTop + 100) {
        selectElmnt('.services__heading').classList.add('services__heading--scrolled');
    }

    // services Gips Deko
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.services__gips-deko__visual').offsetTop + 100) {
        selectElmnt('.services__gips-deko__visual').classList.add('services__gips-deko__visual--scrolled');
    }
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.services__gips-deko__visual__gallery').offsetTop + 200) {
        selectElmnt('.services__gips-deko__visual__gallery').classList.add('services__gips-deko__visual__gallery--scrolled');
    }

    // Visualise
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.services__visualising__heading').offsetTop + 100) {
        selectElmnt('.services__visualising__heading').classList.add('services__visualising__heading--scrolled');
    }
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.services__visualising__item').offsetTop + 100) {
        [...document.querySelectorAll('.services__visualising__item')].forEach(elmnt => elmnt.classList.add('services__visualising__item--scrolled'));
    }
    //special
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.services__gips-deko__text-ul').offsetTop + 100) {
        selectElmnt('.services__gips-deko__text').classList.add('services__gips-deko__text--scrolled');
    }



    // 3D
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.services__3d__header').offsetTop + 100) {
        selectElmnt('.services__3d__header').classList.add('services__3d__header--scrolled');
    }
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.services__3d__imgs').offsetTop + 100) {
        selectElmnt('.services__3d__imgs').classList.add('services__3d__imgs--scrolled');
    }

    // Contact
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.contact__heading').offsetTop) {
        selectElmnt('.contact__heading').classList.add('contact__heading--scrolled');
    }
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.form').offsetTop) {
        selectElmnt('.form').classList.add('form--scrolled');
    }

    // Footer
    if (window.scrollY + window.screen.height - 100 >= selectElmnt('.footer').offsetTop) {
        selectElmnt('.footer').classList.add('footer--scrolled');
        selectElmnt('.footer__line').classList.add('footer__line--scrolled');
    }


});
fixedPos.forEach((elmnt) => {
    handleRatios(elmnt);
    window.addEventListener('resize', () => { handleRatios(elmnt) });
});
// Show shops Gallery
// [...document.querySelectorAll('.shop__slider-view-icon')].forEach(elmnt => elmnt.addEventListener('click', ()=>showGallery(elmnt.parentElement.parentElement)));
// Show Gips-deko Gallery
selectElmnt('.services__gips-deko__visual .heading-tertiary').addEventListener('click', () => {
    selectElmnt('.gips-deko__gallery').classList.add('gips-deko__gallery--active');
});
// Show visualising Gallery
selectElmnt('.services__visualising__heading').addEventListener('click', () => {
    selectElmnt('.visualising__gallery').classList.add('visualising__gallery--active');
});
// Show other3d Gallery
selectElmnt('.services__3d__heading').addEventListener('click', () => {
    selectElmnt('.other3d__gallery').classList.add('other3d__gallery--active');
});
// Hide Shops Gallery
selectElmnt('.shop__gallery-times-icon').addEventListener('click', (e) => {
    selectElmnt('.shop__gallery').classList.remove('shop__gallery--active');

});
// Hide Gips-deko Gallery
selectElmnt('.gips-deko__gallery-times-icon').addEventListener('click', (e) => {
    selectElmnt('.gips-deko__gallery').classList.remove('gips-deko__gallery--active');

});
// Hide visualising Gallery
selectElmnt('.visualising__gallery-times-icon').addEventListener('click', (e) => {
    selectElmnt('.visualising__gallery').classList.remove('visualising__gallery--active');

});
// Hide other3d Gallery
selectElmnt('.other3d__gallery-times-icon').addEventListener('click', (e) => {
    selectElmnt('.other3d__gallery').classList.remove('other3d__gallery--active');

});
document.addEventListener('click', (e) => {
    if (!e.target.closest('.shop__slider-view-icon') && !e.target.closest('.shop__gallery__slider__wrapper__slide') && !e.target.closest('.shop__gallery__arrow') && !e.target.closest('.shop__gallery__slider__wrapper__slide') && !e.target.closest('.overlay_hover_icon')) {
        selectElmnt('.shop__gallery').classList.remove('shop__gallery--active');

    }
    if (!e.target.closest('.services__gips-deko__visual .heading-tertiary') && !e.target.closest('.gips-deko__gallery__slider__wrapper__slide') && !e.target.closest('.gips-deko__gallery__arrow') && !e.target.closest('.gips-deko__gallery__slider__wrapper__slide') && !e.target.closest('.overlay_hover_icon')) {
        selectElmnt('.gips-deko__gallery').classList.remove('gips-deko__gallery--active');

    }
    if (!e.target.closest('.services__visualising__heading') && !e.target.closest('.visualising__gallery__slider__wrapper__slide') && !e.target.closest('.visualising__gallery__arrow') && !e.target.closest('.visualising__gallery__slider__wrapper__slide') && !e.target.closest('.overlay_hover_icon')) {
        selectElmnt('.visualising__gallery').classList.remove('visualising__gallery--active');

    }
    if (!e.target.closest('.services__3d__heading') && !e.target.closest('.other3d__gallery__slider__wrapper__slide') && !e.target.closest('.other3d__gallery__arrow') && !e.target.closest('.other3d__gallery__slider__wrapper__slide') && !e.target.closest('.overlay_hover_icon')) {
        selectElmnt('.other3d__gallery').classList.remove('other3d__gallery--active');

    }
});
// Handle menu
[...document.querySelectorAll('.header__nav ul li a')].forEach(elmnt => {
    elmnt.addEventListener('click', () => {
        selectElmnt('header.header').classList.remove('header--active');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.style.height = '';
    });
});
// Show Menu on click
selectElmnt('.header__button').addEventListener('click', () => {
    selectElmnt('header.header').classList.toggle('header--active');
    if (selectElmnt('header.header').classList.contains('header--active')) {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        document.documentElement.style.overflow = 'hidden';
        // [...document.querySelectorAll('section.about *')].forEach(elmnt => elmnt.style.zIndex = '-1');
    } else {
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.documentElement.style.overflow = '';
    }
});
// Contact form 
// show border on focusin
[...document.querySelectorAll('.contact__text')].forEach((elmnt) => {
    elmnt.addEventListener('focusin', () => {
        if (!elmnt.parentElement.classList.contains('form-row--focus')) {
            elmnt.parentElement.classList.add('form-row--focus');
        }
    });
});
// hide border on focusout
[...document.querySelectorAll('.contact__text')].forEach((elmnt) => {
    elmnt.addEventListener('focusout', () => {
        if (elmnt.parentElement.classList.contains('form-row--focus')) {
            elmnt.parentElement.classList.remove('form-row--focus');
        }
    });
});
// move label on input
[...document.querySelectorAll('.contact__text')].forEach((elmnt) => {
    elmnt.addEventListener('input', () => {
        if (elmnt.value !== '') {
            elmnt.parentElement.classList.add('form-row--active')
        } else {
            elmnt.parentElement.classList.remove('form-row--active')
        }
    });
});
// Focus on input when click on icon
[...document.querySelectorAll('.contact__icon')].forEach(elmnt => {
    elmnt.addEventListener('click', () => elmnt.parentElement.querySelector('.contact__text').focus());
});
// Hide scrollbar when IDLE
// window.addEventListener('wheel', (e) => {
//     selectElmnt('body').classList.add('scrolled');
//     // clearTimeout(timer);
//     const timer = setTimeout(() => {
//         document.body.classList.remove('scrolled');
//     }, 2000);
// });
// Custom Scrollbar
const scrollbar = selectElmnt('.scrollbar');
const scrollbarThumb = selectElmnt('.scrollbar__thumb');

let contentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
let viewportHeight = window.innerHeight;
let viewableRatio = viewportHeight / contentHeight;
let scrollbarThumbSpace = viewableRatio * viewportHeight;

let scrollJump = window.scrollY * viewableRatio;
console.log(`Scroll Jump is: ${scrollJump}`);

let scrollTrackSpace = contentHeight - viewportHeight;
console.log(`viewport Height is ${viewportHeight}`);
console.log(`content Height is: ${contentHeight}`);
scrollbar.style.height = viewportHeight + 'px';
scrollbarThumb.style.height = viewableRatio * viewportHeight + 'px';
window.addEventListener('resize', () => {
    viewportHeight = window.innerHeight;
    viewableRatio = viewportHeight / contentHeight;
    scrollTrackSpace = contentHeight - viewportHeight;
    scrollbarThumbSpace = viewableRatio * viewportHeight;

    scrollbar.style.height = viewportHeight + 'px';
    scrollbarThumb.style.height = viewableRatio * viewportHeight + 'px';
});
document.addEventListener('scroll', () => {
    scrollbarThumb.style.opacity = 1;
    setTimeout(() => {
        scrollbarThumb.style.opacity = '';
    }, 1000)
    scrollJump = window.scrollY * viewableRatio;
    scrollbarThumb.style.top = scrollJump + 'px';
});
// hidescrollbar if media is touch
if (window.matchMedia("(pointer: coarse)").matches) {
    // touchscreen
    selectElmnt('.scrollbar').style.display = "none"
} else {
    selectElmnt('.scrollbar').style.display = ""
}
/****** 
 * 
 * Main Functions
 * ******/
// Handle Showing Gallery
function showGallery(clickedElmnt) {
    let elesArr = [...document.querySelectorAll('.shop__slider-img')];
    console.log('Before Operating', elesArr);
    elesArr.shift();
    elesArr.shift();
    elesArr.pop();
    elesArr.pop();
    const clickedIndex = parseInt(clickedElmnt.getAttribute('data-gallery-index'));
    console.log(clickedIndex);
    selectElmnt('.shop__gallery').classList.add('shop__gallery--active');
    // document.body.style.overflow = 'hidden';
    // Scroll to Clicked element
    if (typeof clickedIndex !== undefined) {
        let slideWidth = parseFloat(getComputedStyle([...document.querySelectorAll('.shop__gallery__slider__wrapper__slide')][0]).width);
        selectElmnt('.shop__gallery__slider__wrapper').style.left = -(clickedIndex + 1) * slideWidth + 'px';
    } else {}
}

function showGlobalGallery(clickedElmnt) {
    // Exit if element is not deifned in any gallery
    if (typeof clickedElmnt === 'undefined' || clickedElmnt.parentElement.parentElement.getAttribute('data-gallery') === null) return
        // Show Gallery
    let clickedElmntSelector = clickedElmnt.parentElement.parentElement.getAttribute('data-gallery');
    selectElmnt(`.${clickedElmntSelector}`).classList.add(`${clickedElmntSelector}--active`);

    // Slide to clicked element [Exception]

    // Exit if element is not indexed according to gallery
    if (typeof selectElmnt(`.${clickedElmntSelector}__slider__wrapper`) === 'undefined' || typeof selectElmnt(`.${clickedElmntSelector}__slider__wrapper__slide`) === 'undefined' || clickedElmnt.parentElement.parentElement.getAttribute('data-gallery-index') === null) return
        // Store element index, wrapper[the Gallery bar] and  the slide width[visible area of slider]
    const clickedIndex = parseFloat(clickedElmnt.parentElement.parentElement.getAttribute('data-gallery-index'));
    const slideWrapper = selectElmnt(`.${clickedElmntSelector}__slider__wrapper`);
    const slideWidth = parseFloat(getComputedStyle([...document.querySelectorAll(`.${clickedElmntSelector}__slider__wrapper__slide`)][0]).width);
    // Slide to clicked element
    slideWrapper.style.left = -1 * (clickedIndex + 1) * slideWidth + 'px';
}

// Make Specified positioned elements in its place
function handleRatios(elmnt) {
    let magnifyingFactor;
    // check if screen width is less than 600, then don't scale according to ratio and reset style
    if (parseFloat(getComputedStyle(document.body).width) <= 600) {
        magnifyingFactor = parseFloat(parseFloat(getComputedStyle(document.body).width) / 390);
        // reset and clear style
        elmnt.removeAttribute('style');
        [...elmnt.querySelectorAll('*')].forEach(elmnt => elmnt.removeAttribute('style'));
        // add margin-top to the whole content
        selectElmnt('section.about').style.paddingTop = `${535 * magnifyingFactor}px`;
        selectElmnt('.was-bieten .red-badge').style.fontSize = `${14 * magnifyingFactor}px`;
        selectElmnt('.wer-sind__content .heading-secondary').style.fontSize = `${44 * magnifyingFactor}px`;
        selectElmnt('.wer-sind__sub-heading').style.fontSize = `${18 * magnifyingFactor}px`;
        selectElmnt('.wer-sind__text').style.fontSize = `${14 * magnifyingFactor}px`;
        selectElmnt('.shop__heading').style.fontSize = `${27 * magnifyingFactor}px`;
        selectElmnt('.shop__heading').style.left = `${290 * magnifyingFactor}px`;
        selectElmnt('.shop__heading').style.right = '';
        selectElmnt('.shop__heading').style.top = `${210 * magnifyingFactor}px`;
        selectElmnt('.shop__heading__triangle').style.cssText = `
            top: calc(100% + ${5 * magnifyingFactor}px);
            border-top: ${8 * magnifyingFactor}px solid var(--color-dark-red);
            border-right: ${8 * magnifyingFactor}px solid transparent;
            border-bottom: ${8 * magnifyingFactor}px solid transparent;
            border-left: ${8 * magnifyingFactor}px solid transparent;
            left: ${46.5 * magnifyingFactor}px
        `;
        selectElmnt('.shop__heading .heading-secondary__red').style.fontSize = `${34 * magnifyingFactor}px`;
        return;
    } else {
        elmnt.removeAttribute('style');
        [...elmnt.querySelectorAll('*')].forEach(elmnt => elmnt.removeAttribute('style'));
    }
    magnifyingFactor = parseFloat(getComputedStyle(document.body).width) / dimensionsRef.width;
    let newLeft;
    let newTop;
    if (typeof dimensionsRef[elmnt.getAttribute('data-pos')].left !== 'undefined') {
        newLeft = (parseFloat(getComputedStyle(document.body).width) * dimensionsRef[elmnt.getAttribute('data-pos')].left) / dimensionsRef.width + 'px';
        elmnt.style.left = newLeft;
    } else if (typeof dimensionsRef[elmnt.getAttribute('data-pos')].right !== 'undefined') {
        newLeft = (parseFloat(getComputedStyle(document.body).width) * dimensionsRef[elmnt.getAttribute('data-pos')].right) / dimensionsRef.width + 'px';
        elmnt.style.right = newLeft;
    } else {
        // console.log('Error in element', elmnt);
    }
    if (typeof dimensionsRef[elmnt.getAttribute('data-pos')].top !== 'undefined') {
        newTop = magnifyingFactor * dimensionsRef[elmnt.getAttribute('data-pos')].top + 'px'
        elmnt.style.top = newTop;
    } else if (typeof dimensionsRef[elmnt.getAttribute('data-pos')].bottom !== 'undefined') {
        newTop = magnifyingFactor * dimensionsRef[elmnt.getAttribute('data-pos')].bottom + 'px'
        elmnt.style.bottom = newTop;
    } else {
        // console.log('Error in element', elmnt) 
    }
    elmnt.style.transform = `scale(${magnifyingFactor})`;
    // Exceptions
    if (elmnt.classList.contains('services__p-line')) {
        elmnt.style.transform = ` scaleY(${magnifyingFactor}) translateX(-50%)`;
        elmnt.style.width = document.body.offsetWidth - (80 * magnifyingFactor) + 'px';
        elmnt.style.borderLeft = `${1.77 * magnifyingFactor}px solid var(--color-light-white)`;
        elmnt.style.borderRight = `${1.77 * magnifyingFactor}px solid var(--color-light-white)`;
    }
    if (elmnt.classList.contains('services__line')) {
        elmnt.style.borderTop = `${1.77 * magnifyingFactor}px solid var(--color-light-white)`;
        elmnt.style.borderBottom = `${1.77 * magnifyingFactor}px solid var(--color-light-white)`;
    }
    if (elmnt.classList.contains('services__gips-deko__text-ul')) {
        elmnt.style.transform = '';
        elmnt.querySelector('ul').style.paddingRight = selectElmnt('.shop').getBoundingClientRect().width - selectElmnt('.shop__slider').getBoundingClientRect().width + 20 * magnifyingFactor + 'px';
        elmnt.querySelector('ul').style.fontSize = (26 * magnifyingFactor) + 'px';
    }
    if (elmnt.classList.contains("services__gips-deko__text-p")) {
        elmnt.style.transform = '';
        // elmnt.querySelector('p').style.fontSize = (services__gipsDeko__textP.fontSize * magnifyingFactor) + 'px';
        elmnt.querySelector('p').style.fontSize = (16 * magnifyingFactor) + 'px';
        // elmnt.style.paddingRight = selectElmnt('.shop').getBoundingClientRect().width - selectElmnt('.shop__slider').getBoundingClientRect().width + 20 * magnifyingFactor + 'px';
    }
    [...document.querySelectorAll('.services__line')].forEach((elmnt) => elmnt.style.width = selectElmnt('.shop__slider').getBoundingClientRect().width * 2 / 3 + 'px');
    if (elmnt.classList.contains('services__visualising__item')) {
        elmnt.style.transform = '';
        elmnt.querySelector('.services__visualising__item > div:nth-child(2)').style.height = `${297.6 * magnifyingFactor}px`;
        elmnt.querySelector('h4.red-badge').style.fontSize = `${18 * magnifyingFactor}px`;
        elmnt.querySelector('h4.red-badge').style.padding = `0px ${40 * magnifyingFactor}px`;
        elmnt.querySelector('.services__visualising__item__img').style.width = `${245 * magnifyingFactor}px`;
        elmnt.querySelector('.services__visualising__item__text').style.width = 399 * magnifyingFactor + 'px';
        elmnt.querySelector('.services__visualising__item__text').style.padding = 40 * magnifyingFactor + 'px ' + magnifyingFactor * 35 + 'px';
        elmnt.querySelector('.services__visualising__item__text').style.marginRight = 17 * magnifyingFactor + 'px';
        elmnt.querySelector('.services__visualising__item__text .paragraph').style.fontSize = 16 * parseFloat(getComputedStyle(document.body).width) / 1536 + 'px';
        if (elmnt.classList.contains('services__visualising__item--2')) {
            elmnt.style.marginRight = 29 + selectElmnt('.shop').getBoundingClientRect().width - selectElmnt('.shop__slider').getBoundingClientRect().width + 'px';
        }
    }
    if (elmnt.classList.contains('services__3d__imgs')) {
        elmnt.style.transform = '';
        // elmnt.style.right = (29 * magnifyingFactor) + selectElmnt('.shop').getBoundingClientRect().width - selectElmnt('.shop__slider').getBoundingClientRect().width + 'px';
        [...elmnt.querySelectorAll('.services__3d__img')].forEach(elmnt => elmnt.style.maxWidth = 594 * magnifyingFactor + 'px');
    }
    // selectElmnt('.shop__gallery__slider').style.width = getComputedStyle([...document.querySelectorAll('.shop__gallery__slider__wrapper__slide')][0]).width;
    if (elmnt.classList.contains('form')) {
        elmnt.style.transform = `translateX(-50%) scale(${magnifyingFactor})`;
        elmnt.style.width = 1050 + 'px';

    }
    if (elmnt.classList.contains('contact__heading')) {
        elmnt.style.transform = '';
        elmnt.style.fontSize = `${124 * magnifyingFactor}px`;
    }
    if (elmnt.classList.contains('footer__line')) {
        elmnt.style.transform = '';

    }
    if (elmnt.classList.contains('full-row')) {
        elmnt.style.transform = 'translateX(-50%)';
        elmnt.style.width = document.body.offsetWidth - (2 * (selectElmnt('.shop').getBoundingClientRect().width - selectElmnt('.shop__slider').getBoundingClientRect().width)) + 'px'
        elmnt.querySelector('p').style.fontSize = `${14 * magnifyingFactor}px`;
        elmnt.querySelector('.footer__social_icons').style.transform = `scale(${magnifyingFactor})`;
    }

    if (elmnt.classList.contains('services__gips-deko__visual__gallery')) {
        elmnt.style.transform = `scale(${magnifyingFactor}) translateX(-50%)`;
        // [...elmnt.querySelectorAll('.services__gips-deko__visual__img')].forEach(elmnt => elmnt.style.transform = `scale(${magnifyingFactor})`);
        // elmnt.style.width = document.body.offsetWidth - (2 * (selectElmnt('.shop').getBoundingClientRect().width - selectElmnt('.shop__slider').getBoundingClientRect().width)) + 'px'
    }
}
/* ### Slider Functions ### */
function slideV(items, prev, next) {
    let posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        slides = [...document.querySelectorAll('.shop__slider-img')],
        threshold = slides[0].offsetHeight / 8,
        slidesLength = slides.length,
        slideSize = slides[0].offsetHeight + parseInt(getComputedStyle(slides[0]).marginBottom),
        firstSlide = slides[0],
        secondSlide = slides[1],
        bLastSlide = slides[slidesLength - 2],
        lastSlide = slides[slidesLength - 1],
        cloneFirst = firstSlide.cloneNode(true),
        cloneSecond = secondSlide.cloneNode(true),
        cloneBLast = bLastSlide.cloneNode(true),
        cloneLast = lastSlide.cloneNode(true),
        index = 0,
        allowShift = true;
    // Clone first and last slide
    items.appendChild(cloneFirst);
    items.appendChild(cloneSecond);
    items.insertBefore(cloneLast, firstSlide);
    items.insertBefore(cloneBLast, cloneLast);
    items.style.top = -2 * slideSize + 'px';
    //   wrapper.classList.add('loaded');

    // Mouse events
    items.onmousedown = dragStart;

    // Touch events
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);

    // Click events
    next.addEventListener('click', function() { shiftSlide(-1) });
    prev.addEventListener('click', function() { shiftSlide(1) });

    // Wheel event
    selectElmnt('.shop__slider').addEventListener('wheel', (e) => {
        e.preventDefault();
        e.deltaY > 0 ? shiftSlide(1) : shiftSlide(-1);
    });

    // Transition events
    items.addEventListener('transitionend', checkIndex);

    function dragStart(e) {
        e = e || window.event;
        e.preventDefault();
        posInitial = items.offsetTop;

        if (e.type == 'touchstart') {
            posX1 = e.touches[0].clientY;
        } else {
            posX1 = e.clientY;
            document.onmouseup = dragEnd;
            document.onmousemove = dragAction;
        }
    }

    function dragAction(e) {
        e = e || window.event;

        if (e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientY;
            posX1 = e.touches[0].clientY;
        } else {
            posX2 = posX1 - e.clientY;
            posX1 = e.clientY;
        }
        items.style.top = (items.offsetTop - posX2) + "px";
    }

    function dragEnd(e) {
        posFinal = items.offsetTop;
        if (posFinal - posInitial < -threshold) {
            shiftSlide(1, 'drag');
            slides.forEach((elmnt) => elmnt.classList.remove('shop__slider-img--hover'));
        } else if (posFinal - posInitial > threshold) {
            shiftSlide(-1, 'drag');
            slides.forEach((elmnt) => elmnt.classList.remove('shop__slider-img--hover'));
        } else {
            items.style.top = (posInitial) + "px";
            // Hover Effect
            document.querySelectorAll('.shop__slider-img').forEach((elmnt) => elmnt.classList.remove('shop__slider-img--hover'));
            // if clicked Touched element is container, then simulate hover state(add hover class)
            if (e.target.parentElement.classList.contains('shop__slider-img')) {

                e.target.parentElement.classList.add('shop__slider-img--hover')

            } else if (e.target.classList.contains('shop__slider-view-icon')) {
                showGallery(e.target.parentElement.parentElement);
            } else if (e.target.parentElement.classList.contains('shop__slider-view-icon')) {
                showGallery(e.target.parentElement.parentElement.parentElement);
            } else if (e.target.parentElement.parentElement.classList.contains('shop__slider-view-icon')) {
                showGallery(e.target.parentElement.parentElement.parentElement.parentElement);
            } else if (e.target.parentElement.parentElement.parentElement.classList.contains('shop__slider-view-icon')) {
                showGallery(e.target.parentElement.parentElement.parentElement.parentElement.parentElement);
            }
        }

        document.onmouseup = null;
        document.onmousemove = null;
    }

    function shiftSlide(dir, action) {
        items.classList.add('shifting');

        if (allowShift) {
            if (!action) { posInitial = items.offsetTop; }

            if (dir == 1) {
                items.style.top = (posInitial - slideSize) + "px";
                index++;
            } else if (dir == -1) {
                items.style.top = (posInitial + slideSize) + "px";
                index--;
            }
        };

        allowShift = false;
    }

    function checkIndex() {
        items.classList.remove('shifting');
        if (index == -1) {
            items.style.top = -(slidesLength * slideSize) + "px";
            index = slidesLength - 1;
        }

        if (index == slidesLength) {
            items.style.top = -(1 * slideSize) + "px";
            index = 0;
        }

        allowShift = true;
    }
}
/* ###### */
function slideH(items, slides, prev, next) {
    let posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        slidesLength = slides.length,
        slideSize = parseFloat(getComputedStyle(slides[0]).width),
        firstSlide = slides[0],
        lastSlide = slides[slidesLength - 1],
        cloneFirst = firstSlide.cloneNode(true),
        cloneLast = lastSlide.cloneNode(true),
        index = 0,
        allowShift = true;
    // Clone first and last slide
    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstSlide);
    items.style.left = -slideSize + 'px';
    window.addEventListener('resize', () => {
        slideSize = slides[0].offsetWidth;
        items.style.left = -slideSize + 'px';
    });
    // Mouse events
    items.onmousedown = dragStart;

    // Touch events
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);

    // Click events
    prev.addEventListener('click', function() { shiftSlide(-1) });
    next.addEventListener('click', function() { shiftSlide(1) });

    // Transition events
    items.addEventListener('transitionend', checkIndex);

    function dragStart(e) {
        e = e || window.event;
        e.preventDefault();
        posInitial = items.offsetLeft;

        if (e.type == 'touchstart') {
            posX1 = e.touches[0].clientX;
        } else {
            posX1 = e.clientX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragAction;
        }
    }

    function dragAction(e) {
        e = e || window.event;

        if (e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }
        items.style.left = (items.offsetLeft - posX2) + "px";
    }

    function dragEnd(e) {
        posFinal = items.offsetLeft;
        if (posFinal - posInitial < -threshold) {
            shiftSlide(1, 'drag');
        } else if (posFinal - posInitial > threshold) {
            shiftSlide(-1, 'drag');
        } else {
            items.style.left = (posInitial) + "px";
        }

        document.onmouseup = null;
        document.onmousemove = null;
    }

    function shiftSlide(dir, action) {
        items.classList.add('shifting');

        if (allowShift) {
            if (!action) {
                posInitial = items.offsetLeft;
            }

            if (dir == 1) {
                // console.log(`posInitial[${posInitial}] - slideSize[${slideSize}] = items.left[${posInitial - slideSize}]`);
                items.style.left = (posInitial - slideSize) + "px";
                index++;
            } else if (dir == -1) {
                items.style.left = (posInitial + slideSize) + "px";
                index--;
            }
        };

        allowShift = false;
    }

    function checkIndex() {
        items.classList.remove('shifting');

        if (index == -1) {
            items.style.left = -(slidesLength * slideSize) + "px";
            index = slidesLength - 1;
        }

        if (index == slidesLength) {
            items.style.left = -(1 * slideSize) + "px";
            index = 0;
        }

        allowShift = true;
    }
}

dragElement(scrollbarThumb, document);

function dragElement(elmnt, cont, trigger = elmnt) {
    let newY = 0,
        oldY = 0,
        y;
    if (!trigger) {
        trigger = elmnt;
    }
    trigger.addEventListener('mousedown', dragMouseDown);
    trigger.addEventListener('touchstart', dragMouseDown);

    function dragMouseDown(e) {
        e = e || window.event;
        // e.preventDefault();
        e.stopPropagation();
        scrollbarThumb.style.opacity = 1;
        setTimeout(() => {
                scrollbarThumb.style.opacity = '';
            }, 1000)
            // Get touch or click position
        if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
            e.preventDefault();
            let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
            let touch = evt.touches[0] || evt.changedTouches[0];
            y = touch.pageY;
        } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave') {
            y = e.clientY;
        }
        // get the mouse cursor or touch position
        oldY = y;
        cont.addEventListener('mouseup', closeDragElement);
        cont.addEventListener('touchend', closeDragElement);
        // call a function whenever the cursor moves:
        cont.addEventListener('mousemove', elementDrag);
        cont.addEventListener('touchmove', elementDrag);
    }

    function elementDrag(e) {
        e = e || window.event;
        // e.preventDefault();
        e.stopPropagation();
        // Get touch or click event
        if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
            e.preventDefault();
            let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
            let touch = evt.touches[0] || evt.changedTouches[0];
            y = touch.pageY;
        } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave') {
            y = e.clientY;
        }
        // check if element reached its endpoints
        if (elmnt.offsetTop < 0) {
            elmnt.style.top = 0 + 'px'
        } else if (elmnt.offsetTop > parseFloat(getComputedStyle(scrollbar).height) - parseFloat(getComputedStyle(elmnt).height)) {
            console.log(`elmnt.offsetTop: ${elmnt.offsetTop}`);
            elmnt.style.top = parseFloat(getComputedStyle(scrollbar).height) - parseFloat(getComputedStyle(elmnt).height) - 2 + 'px';
        } else {
            // calculate the new cursor or touch position:
            // console.log(elmnt.offsetTop);
            newY = oldY - y;
            // store new positions as old positions
            oldY = y;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - newY) + "px";
            window.scrollTo(0, parseFloat(elmnt.offsetTop) / viewableRatio);
        }
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        cont.removeEventListener('mouseup', closeDragElement);
        cont.removeEventListener('mousemove', elementDrag);
        cont.removeEventListener('touchend', closeDragElement);
        cont.removeEventListener('touchmove', elementDrag);
    }
}

function selectElmnt(selector) {
    if (document.querySelector(selector)) {
        return document.querySelector(selector)
    } else {
        return document
    }
}