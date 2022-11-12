const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

ulEl.innerHTML = list;

// const listEl = document.querySelector('#ingredients');

// listEl.forEach(element => {
//   let items = document.createElement('li');
//   items.insertAdjacentElement = element;
// });

// const itemEl = document.createElement('li');
// console.log(listEl);
// itemEl.classList.add('item');
// itemEl.textContent = 'Potatoes';


// const itemEl2 = document.createElement('li');
// itemEl2.classList.add('item');
// itemEl2.textContent = 'Mushrooms';


// const itemEl3 = document.createElement('li');
// itemEl3.classList.add('item');
// itemEl3.textContent = 'Garlic';


// const itemEl4 = document.createElement('li');
// itemEl4.classList.add('item');
// itemEl4.textContent = 'Tomatos';


// const itemEl5 = document.createElement('li');
// itemEl5.classList.add('item');
// itemEl5.textContent = 'Herbs';

// const itemEl6 = document.createElement('li');
// itemEl6.classList.add('item');
// itemEl6.textContent = 'Condiments';

// listEl.append(itemEl, itemEl2, itemEl3, itemEl4, itemEl5, itemEl6);

// console.log(listEl);

