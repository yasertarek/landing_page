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
    'we-design':{
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
      top: 2785,
      left: 736
    },
    'services__visualising__heading': {
      top: 2837,
      left: 76
    },
    'services__visualising__item--1': {
      top: 2990,
      left: 70
    },
    'services__visualising__item--2': {
      top: 2990,
      left: 780
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
 fixedPos.forEach((elmnt)=>{
    handleRatios(elmnt);
    window.addEventListener('resize', ()=>{handleRatios(elmnt)});
});
// Trigger Slider
window.onload = ()=>{
  console.log('window loaded !')
  slideV(sliderItemsV, prevV, nextV);
  slideH(sliderItemsH, prevH, nextH);
  if(document.querySelector('.loading')){
    document.querySelector('.loading').style.opacity = 0;
    setTimeout(()=>{
      document.querySelector('.loading').remove();
    }, 500);
  }
};
// Show Gallery
[...document.querySelectorAll('.shop__slider-view-icon')].forEach((elmnt)=>{
  elmnt.addEventListener('click', (e)=>{
    // document.querySelector('.shop__gallery img').setAttribute('src', e.currentTarget.parentElement.parentElement.getElementsByTagName('img')[0].getAttribute('src'));
    document.querySelector('.shop__gallery').classList.add('shop__gallery--active');
    // Scroll to Clicked element
    console.log(elmnt.parentElement.parentElement);
    document.body.style.overflow = 'hidden';
  });
});
// Hide Gallery
document.querySelector('.shop__gallery-times-icon').addEventListener('click', (e)=>{
  console.log(`Youc Clicked ${e.target} and handler is ${e.currentTarget}`)
  document.querySelector('.shop__gallery').classList.remove('shop__gallery--active');
  document.body.style.overflow = '';
});
document.addEventListener('click', (e)=>{
  if(!e.target.closest('.shop__slider-view-icon') && !e.target.closest('.shop__gallery__slider__wrapper__slide') && !e.target.closest('.shop__gallery__arrow') && !e.target.closest('.shop__gallery__slider__wrapper__slide')){
    console.log(`Youc Clicked ${e.target} and handler is ${e.currentTarget}`)
    document.querySelector('.shop__gallery').classList.remove('shop__gallery--active');
    document.body.style.overflow = '';
  }
});
/****** 
 * 
 * Main Functions
 * ******/
// Make Specified positioned elements in its place
function handleRatios(elmnt){
    if(window.screen.width <= 600){
        elmnt.style.left = '';
        elmnt.style.top = '';
        elmnt.style.transform = '';
        elmnt.style.fontSize = '';
        return;
    }
    // console.log(`'window is Greater than 600' which is ${window.screen.width}`);
    if(!elmnt.getAttribute('data-pos') || !dimensionsRef[elmnt.getAttribute('data-pos')]){
      console.log('You did not Add element in data object yet!, element is: ', elmnt);
      return;
    }
    let magnifyingFactor = window.screen.width / dimensionsRef.width;
    let newLeft;
    let newTop = magnifyingFactor * dimensionsRef[elmnt.getAttribute('data-pos')].top + 'px';
    if(typeof dimensionsRef[elmnt.getAttribute('data-pos')].left !== 'undefined'){
        newLeft = ( window.screen.width * dimensionsRef[elmnt.getAttribute('data-pos')].left) / dimensionsRef.width + 'px';
        elmnt.style.left = newLeft;
    }else if(typeof dimensionsRef[elmnt.getAttribute('data-pos')].right !== 'undefined'){
        newLeft = ( window.screen.width * dimensionsRef[elmnt.getAttribute('data-pos')].right) / dimensionsRef.width + 'px';
        elmnt.style.right = newLeft;
    }else{
        console.log('Error in element', elmnt);
    }
    elmnt.style.top = newTop;
    elmnt.style.transform = `scale(${magnifyingFactor})`;
    // Exceptions
    if(elmnt.classList.contains('services__p-line')){
      elmnt.style.transform = ` scaleY(${magnifyingFactor}) translateX(-50%)`;
      elmnt.style.left = '50%';
      elmnt.style.width = document.body.offsetWidth - (2 * (document.querySelector('.shop').getBoundingClientRect().width - document.querySelector('.shop__slider').getBoundingClientRect().width)) + 'px';
      console.log('services__p-line works! and element is: ', elmnt);
    }else{
      console.log(elmnt, `Doesn't have ".services__p-line" class`);
    }
    if(elmnt.classList.contains('services__gips-deko__text-ul')){
      elmnt.style.transform = '';
      elmnt.style.paddingRight = document.querySelector('.shop').getBoundingClientRect().width - document.querySelector('.shop__slider').getBoundingClientRect().width + 20 * magnifyingFactor + 'px';
      elmnt.style.fontSize = (26 * magnifyingFactor) + 'px';
    }
    if(elmnt.classList.contains("services__gips-deko__text-p")){
      elmnt.style.transform = '';
      elmnt.style.fontSize = (16 * magnifyingFactor) + 'px';
      elmnt.style.paddingRight = document.querySelector('.shop').getBoundingClientRect().width - document.querySelector('.shop__slider').getBoundingClientRect().width + 20 * magnifyingFactor + 'px';
    }
    [...document.querySelectorAll('.services__line')].forEach((elmnt)=>elmnt.style.width = document.querySelector('.shop__slider').getBoundingClientRect().width * 2 / 3 + 'px');
    if(elmnt.classList.contains('services__visualising__item')){
      console.log('item-2 class check worked correctly!');
      elmnt.style.transform = '';
      elmnt.querySelector('h4.red-badge').style.fontSize = `${18 * magnifyingFactor}px`;
      elmnt.querySelector('h4.red-badge').style.padding = `0px ${40 * magnifyingFactor}px`;
      elmnt.querySelector('.services__visualising__item__img').style.maxWidth = `${245 * magnifyingFactor}px`;
      elmnt.querySelector('.services__visualising__item__text').style.width = 399 * magnifyingFactor + 'px';
      elmnt.querySelector('.services__visualising__item__text').style.padding = 40 * magnifyingFactor + 'px ' + magnifyingFactor * 35 + 'px';
      elmnt.querySelector('.services__visualising__item__text').style.marginRight = 17 * magnifyingFactor + 'px';
      elmnt.querySelector('.services__visualising__item__text p').style.fontSize = 16 * magnifyingFactor + 'px';
      if(elmnt.classList.contains('services__visualising__item--2')){
        elmnt.style.marginRight = 29 + document.querySelector('.shop').getBoundingClientRect().width - document.querySelector('.shop__slider').getBoundingClientRect().width + 'px';
      }
    }
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
  // console.log(`slides[0].offsetHeight${slides[0].offsetHeight} + slides[0].marginBottom${parseInt(getComputedStyle(slides[0]).marginBottom)}  = slideSize: ${slideSize}`);
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.appendChild(cloneSecond);
  items.insertBefore(cloneLast, firstSlide);
  items.insertBefore(cloneBLast, cloneLast);
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
  
  function dragStart (e) {
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

  function dragAction (e) {
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
  
  function dragEnd (e) {
    posFinal = items.offsetTop;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.top = (posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  function shiftSlide(dir, action) {
    console.log
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
    
  function checkIndex (){
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
  items.style.left = -slideSize + 'px'
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  
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
  
  function dragStart (e) {
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

  function dragAction (e) {
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
  
  function dragEnd (e) {
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
        console.log(`!action, posInitial = items.offsetLeft[${items.offsetLeft}]`);
      }

      if (dir == 1) {
        items.style.left = (posInitial - slideSize) + "px";
        index++;      
        console.log(`dir = ${dir}\nposInitial[${posInitial}] - slideSize[${slideSize}] = ${posInitial - slideSize}`)
      } else if (dir == -1) {
        items.style.left = (posInitial + slideSize) + "px";
        index--;      
        console.log(`dir = ${dir}\nposInitial[${posInitial}] + slideSize[${slideSize}] = ${posInitial + slideSize}`)
      }
    };
    
    allowShift = false;
  }
    
  function checkIndex (){
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
