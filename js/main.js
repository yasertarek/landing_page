// Class of Specified positioned elements
const fixedPos = [...document.querySelectorAll('.fixed-pos')];
// Ratios of dimensions between window width and coordinates of element
let dimensionsRef = {
    width: 1536,
    'wer-sind': {
        left: 985,
        top: 768,
    },
    'was-bieten': {
        left: 5,
        top: 953,
    },
    'our-vision': {
        left: 0,
        top: 1496,
    },
    explore: {
        // left: 1285,
        right: 0,
        top: 1496,
    }
}
/* ### Slider Variables ### */
let sliderItems = document.querySelector('.explore__slider-wrapper div'),
    prev = document.querySelector('.explore__slider-arrow--down'),
    next = document.querySelector('.explore__slider-arrow--up');
/****** 
 * 
 * Main Flow and events
 * ******/
 fixedPos.forEach((elmnt)=>{
    handleRatios(elmnt);
    window.addEventListener('resize', ()=>{handleRatios(elmnt)});
});
slide(sliderItems, prev, next);
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
      threshold = 100,
      slides = items.getElementsByClassName('explore__slider-img'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('explore__slider-img')[0].offsetHeight + 15,
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
    items.classList.add('shifting');
    
    if (allowShift) {
      if (!action) { posInitial = items.offsetTop; }

      if (dir == 1) {
        items.style.top = (posInitial - slideSize) + "px";
        console.log(posInitial - slideSize);
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