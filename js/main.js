const fixedPos = [...document.querySelectorAll('.fixed-pos')];
let dimensionsRef = {
    width: 1688,
    'wer-sind': {
        left: 1090,
        top: 840,
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
        right: 0,
        top: 1350,
    }
}
function handleRatios(elmnt){
    if(document.body.offsetWidth < 600){
        elmnt.style.left = '';
        elmnt.style.top = '';
        elmnt.style.transform = '';
        return;
    }
    let newLeft;
    let newTop = (document.body.offsetWidth * dimensionsRef[elmnt.getAttribute('data-pos')].top) / dimensionsRef.width + 'px';
    let magnifyingFactor = document.body.offsetWidth / dimensionsRef.width;
    if(typeof dimensionsRef[elmnt.getAttribute('data-pos')].left !== 'undefined'){
        newLeft = ( document.body.offsetWidth * dimensionsRef[elmnt.getAttribute('data-pos')].left) / dimensionsRef.width + 'px';
        elmnt.style.left = newLeft;
    }else if(typeof dimensionsRef[elmnt.getAttribute('data-pos')].right !== 'undefined'){
        newLeft = ( document.body.offsetWidth * dimensionsRef[elmnt.getAttribute('data-pos')].right) / dimensionsRef.width + 'px';
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