
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const span = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');

btnChangeColor.addEventListener('click', onbtnChangeColor);

function onbtnChangeColor(event) {
  const color = getRandomHexColor();
  
  span.textContent = color;
  body.style.backgroundColor = color;

  console.log(getRandomHexColor());

};
