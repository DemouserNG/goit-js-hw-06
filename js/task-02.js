const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const array = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  array.append(li);
};

console.log(array);

