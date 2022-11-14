
const inputSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputSizeControl.addEventListener('input',onInputChangeSize);

function onInputChangeSize(ev) {
    const size = inputSizeControl.value;
    
spanText.style.fontSize = size + "px";
};