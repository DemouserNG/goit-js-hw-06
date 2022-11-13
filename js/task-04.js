

let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const span = document.querySelector('#value');

decrementBtn.addEventListener('click', onTargetBtnDecremenClick);
incrementBtn.addEventListener('click', onTargetBtnIncrementClick);


function onTargetBtnIncrementClick() {
    counterValue += 1;
    span.textContent = counterValue;
};

function onTargetBtnDecremenClick() {
    counterValue -= 1;

    span.textContent = counterValue;
};