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
      top: 1777
    }
}
/* ### Slider Variables ### */
let sliderItems = document.querySelector('.shop__slider-slide'),
    prev = document.querySelector('.shop__slider-arrow--down'),
    next = document.querySelector('.shop__slider-arrow--up');
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
slide(sliderItems, prev, next);
// Show Gallery
[...document.querySelectorAll('.shop__slider-overlay svg')].forEach((elmnt)=>{
  elmnt.addEventListener('click', (e)=>{
    document.querySelector('.shop__gallery img').setAttribute('src', e.currentTarget.parentElement.parentElement.getElementsByTagName('img')[0].getAttribute('src'));
    document.querySelector('.shop__gallery').classList.add('shop__gallery--active');
  });
});
// Hide Gallery
document.querySelector('.shop__gallery-times-icon').addEventListener('click', ()=>{
  document.querySelector('.shop__gallery').classList.remove('shop__gallery--active');
});
document.addEventListener('click', (e)=>{
  if(!e.target.matches('.shop__gallery-view-icon')){
    document.querySelector('.shop__gallery').classList.remove('shop__gallery--active');
  }
});
/****** 
 * 
 * Main Functions
 * ******/
// Make Specified positioned elements in its place
function handleRatios(elmnt){
    if(window.innerWidth <= 600){
        elmnt.style.left = '';
        elmnt.style.top = '';
        elmnt.style.transform = '';
        return;
    }
    if(!elmnt.getAttribute('data-pos') || !dimensionsRef[elmnt.getAttribute('data-pos')]){
      return;
    }
    let newLeft;
    let newTop = (window.innerWidth * dimensionsRef[elmnt.getAttribute('data-pos')].top) / dimensionsRef.width + 'px';
    let magnifyingFactor = window.innerWidth / dimensionsRef.width;
    if(typeof dimensionsRef[elmnt.getAttribute('data-pos')].left !== 'undefined'){
        newLeft = ( window.innerWidth * dimensionsRef[elmnt.getAttribute('data-pos')].left) / dimensionsRef.width + 'px';
        elmnt.style.left = newLeft;
    }else if(typeof dimensionsRef[elmnt.getAttribute('data-pos')].right !== 'undefined'){
        newLeft = ( window.innerWidth * dimensionsRef[elmnt.getAttribute('data-pos')].right) / dimensionsRef.width + 'px';
        elmnt.style.right = newLeft;
    }else{
        console.log('Error in element', elmnt);
    }
    elmnt.style.top = newTop;
    elmnt.style.transform = `scale(${magnifyingFactor})`;
}
/* ### Slider Functions ### */
function slide(items, prev, next) {
  var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 115,
      slides = [...document.querySelectorAll('.shop__slider-img')],
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