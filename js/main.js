const fixedPos = [...document.querySelectorAll('.fixed-pos')];
let dimensionsRef = {
    width: 1536,
    'wer-sind': {
        left: 985,
        top: 785,
    },
    'was-bieten': {
        left: 5,
        top: 1025,
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
function handleRatios(elmnt){
    if(window.innerWidth < 600){
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

fixedPos.forEach((elmnt)=>{
    handleRatios(elmnt);
    window.addEventListener('resize', ()=>{handleRatios(elmnt)});
});