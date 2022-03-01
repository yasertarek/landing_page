// Class of Specified positioned elements
const fixedPos = [...document.querySelectorAll('.fixed-pos')];
// Ratios of dimensions between window width and coordinates of element
let dimensionsRef = {
  width: 1536,
  'wer-sind': {
    left: 990,
    top: 755,
  },
  'was-bieten': {
    left: 0,
    top: 939,
  },
  'our-vision': {
    left: 0,
    top: 1319,
  },
  shop: {
    // left: 1285,
    right: 0,
    top: 1296.47,
  },
  each_place_is_unique: {
    left: 34,
    top: 1525
  },
  'we-design': {
    left: 704,
    top: 1770
  },
  'services__words-table': {
    left: 44,
    top: 1949
  },
  services__heading: {
    left: 57,
    top: 2017
  },
  'services__gips-deko': {
    top: 2190
  },
  'services__gips-deko__heading-tertiary-Vline': {
    top: 2225,
    left: 700
  },
  'services__gips-deko__visual': {
    top: 2225,
    left: 105
  },
  'services__gips-deko__text-ul': {
    top: 2225,
    left: 763
  },
  'services__gips-deko__text-p': {
    top: 2300,
    left: 763
  },
  'services__visualising': {
    top: 2789,
    left: 736
  },
  'services__visualising__heading': {
    top: 2800,
    left: 76
  },
  'services__visualising__item--1': {
    top: 2965,
    left: 70
  },
  'services__visualising__item--2': {
    top: 2965,
    left: 780
  },
  'services__3d': {
    top: 3363,
    left: 76
  },
  'services__3d__header': {
    top: 3398,
    left: 76
  },
  'services__3d__imgs': {
    top: 3615
  },
  'contact': {
    top: 4025
  }
}
/* ### Slider Variables ### */
let sliderItemsV = document.querySelector('.shop__slider-slide'),
  sliderItemsH = document.querySelector('.shop__gallery__slider__wrapper')
prevV = document.querySelector('.shop__slider-arrow--down'),
  nextV = document.querySelector('.shop__slider-arrow--up'),
  prevH = document.querySelector('.shop__gallery__arrow--left'),
  nextH = document.querySelector('.shop__gallery__arrow--right');
/****** 
 * 
 * Main Flow and events
 * ******/
// Handle Fixed ratios
fixedPos.forEach((elmnt) => {
  handleRatios(elmnt);
  window.addEventListener('resize', () => { handleRatios(elmnt) });
});
// Trigger Slider
window.onload = () => {
  if (document.querySelector('.loading')) {
    document.querySelector('.loading').style.opacity = 0;
    setTimeout(() => {
      document.querySelector('.loading').remove();
    }, 500);
  }
  slideV(sliderItemsV, prevV, nextV);
  slideH(sliderItemsH, prevH, nextH);
};
// Show Gallery
[...document.querySelectorAll('.shop__slider-view-icon')].forEach(elmnt => elmnt.addEventListener('click', showGallery));
// Hide Gallery
document.querySelector('.shop__gallery-times-icon').addEventListener('click', (e) => {
  document.querySelector('.shop__gallery').classList.remove('shop__gallery--active');
  document.body.style.overflow = '';
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('.shop__slider-view-icon') && !e.target.closest('.shop__gallery__slider__wrapper__slide') && !e.target.closest('.shop__gallery__arrow') && !e.target.closest('.shop__gallery__slider__wrapper__slide')) {
    document.querySelector('.shop__gallery').classList.remove('shop__gallery--active');
    document.body.style.overflow = '';
  }
});
/****** 
 * 
 * Main Functions
 * ******/
// Handle Showing Gallery
function showGallery() {
  document.querySelector('.shop__gallery').classList.add('shop__gallery--active');
  document.body.style.overflow = 'hidden';
  /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
  /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
  /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
  /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
  // Scroll to Clicked element
  // document.querySelector('.shop__gallery img').setAttribute('src', e.currentTarget.parentElement.parentElement.getElementsByTagName('img')[0].getAttribute('src'));
}
// Make Specified positioned elements in its place
function handleRatios(elmnt) {
  // check if screen width is less than 600, then don't scale according to ratio and reset style
  if (window.screen.width <= 600) {
    // reset and clear style
    elmnt.removeAttribute('style');
    [...elmnt.querySelectorAll('*')].forEach(elmnt => elmnt.removeAttribute('style'));
    // add margin-top to the whole content
    document.querySelector('section.about').style.marginTop = `${380 * (window.screen.width / 390)}px`;
    return;
  }
  if (!elmnt.getAttribute('data-pos') || !dimensionsRef[elmnt.getAttribute('data-pos')]) {
    console.log('You did not Add element in data object yet!, element is: ', elmnt);
    return;
  }
  let magnifyingFactor = window.screen.width / dimensionsRef.width;
  let newLeft;
  let newTop = magnifyingFactor * dimensionsRef[elmnt.getAttribute('data-pos')].top + 'px';
  if (typeof dimensionsRef[elmnt.getAttribute('data-pos')].left !== 'undefined') {
    newLeft = (window.screen.width * dimensionsRef[elmnt.getAttribute('data-pos')].left) / dimensionsRef.width + 'px';
    elmnt.style.left = newLeft;
  } else if (typeof dimensionsRef[elmnt.getAttribute('data-pos')].right !== 'undefined') {
    newLeft = (window.screen.width * dimensionsRef[elmnt.getAttribute('data-pos')].right) / dimensionsRef.width + 'px';
    elmnt.style.right = newLeft;
  } else {
    console.log('Error in element', elmnt);
  }
  elmnt.style.top = newTop;
  elmnt.style.transform = `scale(${magnifyingFactor})`;
  // Exceptions
  document.querySelector('.services__p-line').style.borderLeft = `${1.77 * magnifyingFactor}px solid var(--color-t-white)`;
  document.querySelector('.services__p-line').style.borderRight = `${1.77 * magnifyingFactor}px solid var(--color-t-white)`;
  document.querySelector('.services__line').style.borderTop = `${1.77 * magnifyingFactor}px solid var(--color-t-white)`;
  document.querySelector('.services__line').style.borderBottom = `${1.77 * magnifyingFactor}px solid var(--color-t-white)`;
  if (elmnt.classList.contains('services__p-line')) {
    elmnt.style.transform = ` scaleY(${magnifyingFactor}) translateX(-50%)`;
    elmnt.style.left = '50%';
    elmnt.style.width = document.body.offsetWidth - (2 * (document.querySelector('.shop').getBoundingClientRect().width - document.querySelector('.shop__slider').getBoundingClientRect().width)) + 'px';
  }
  if (elmnt.classList.contains('services__gips-deko__text-ul')) {
    elmnt.style.transform = '';
    elmnt.style.paddingRight = document.querySelector('.shop').getBoundingClientRect().width - document.querySelector('.shop__slider').getBoundingClientRect().width + 20 * magnifyingFactor + 'px';
    elmnt.style.fontSize = (26 * magnifyingFactor) + 'px';
  }
  if (elmnt.classList.contains("services__gips-deko__text-p")) {
    elmnt.style.transform = '';
    elmnt.style.fontSize = (16 * magnifyingFactor) + 'px';
    elmnt.style.paddingRight = document.querySelector('.shop').getBoundingClientRect().width - document.querySelector('.shop__slider').getBoundingClientRect().width + 20 * magnifyingFactor + 'px';
  }
  [...document.querySelectorAll('.services__line')].forEach((elmnt) => elmnt.style.width = document.querySelector('.shop__slider').getBoundingClientRect().width * 2 / 3 + 'px');
  if (elmnt.classList.contains('services__visualising__item')) {
    elmnt.style.transform = '';
    elmnt.querySelector('.services__visualising__item > div:nth-child(2)').style.height = `${297.6 * magnifyingFactor}px`;
    elmnt.querySelector('h4.red-badge').style.fontSize = `${18 * magnifyingFactor}px`;
    elmnt.querySelector('h4.red-badge').style.padding = `0px ${40 * magnifyingFactor}px`;
    elmnt.querySelector('.services__visualising__item__img').style.width = `${245 * magnifyingFactor}px`;
    elmnt.querySelector('.services__visualising__item__text').style.width = 399 * magnifyingFactor + 'px';
    elmnt.querySelector('.services__visualising__item__text').style.padding = 40 * magnifyingFactor + 'px ' + magnifyingFactor * 35 + 'px';
    elmnt.querySelector('.services__visualising__item__text').style.marginRight = 17 * magnifyingFactor + 'px';
    elmnt.querySelector('.services__visualising__item__text p').style.fontSize = 16 * window.screen.width / 1536 + 'px';
    if (elmnt.classList.contains('services__visualising__item--2')) {
      elmnt.style.marginRight = 29 + document.querySelector('.shop').getBoundingClientRect().width - document.querySelector('.shop__slider').getBoundingClientRect().width + 'px';
    }
  }
  if (elmnt.classList.contains('services__3d__imgs')) {
    elmnt.style.transform = '';
    elmnt.style.right = (29 * magnifyingFactor) + document.querySelector('.shop').getBoundingClientRect().width - document.querySelector('.shop__slider').getBoundingClientRect().width + 'px';
    [...elmnt.querySelectorAll('.services__3d__img')].forEach(elmnt => elmnt.style.maxWidth = 594 * magnifyingFactor + 'px');
  }
  // document.querySelector('.shop__gallery__slider').style.width = getComputedStyle([...document.querySelectorAll('.shop__gallery__slider__wrapper__slide')][0]).width;
}
/* ### Slider Functions ### */
function slideV(items, prev, next) {
  let posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    slides = [...document.querySelectorAll('.shop__slider-img')],
    threshold = slides[0].offsetHeight / 4,
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
  items.style.top = - 2 * slideSize + 'px';
  //   wrapper.classList.add('loaded');

  // Mouse events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);

  // Click events
  next.addEventListener('click', function () { shiftSlide(-1) });
  prev.addEventListener('click', function () { shiftSlide(1) });

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
        showGallery();
        console.log('You clicked SVG, and trigger is: ', e.target);
      } else if (e.target.parentElement.classList.contains('shop__slider-view-icon')) {
        showGallery();
        console.log('You clicked SVG Child, and ParentOfTrigger is: ', e.target.parentElement);
      } else if (e.target.parentElement.parentElement.classList.contains('shop__slider-view-icon')) {
        showGallery();
        console.log('You clicked SVG Child Child, and ParentOfParentOfTrigger is: ', e.target.parentElement.parentElement);
      } else if (e.target.parentElement.parentElement.parentElement.classList.contains('shop__slider-view-icon')) {
        showGallery();
        console.log('You clicked SVG Child Child Child, and ParentOfParentOfParentOfTrigger is: ', e.target.parentElement.parentElement.parentElement);
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
function slideH(items, prev, next) {
  let posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slides = document.getElementsByClassName('shop__gallery__slider__wrapper__slide'),
    slidesLength = slides.length,
    slideSize = slides[0].offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true;
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  items.style.left = - slideSize + 'px';
  window.addEventListener('resize', () => {
    slideSize = slides[0].offsetWidth;
    items.style.left = - slideSize + 'px';
  });
  // Mouse events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);

  // Click events
  prev.addEventListener('click', function () { shiftSlide(-1) });
  next.addEventListener('click', function () { shiftSlide(1) });

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
