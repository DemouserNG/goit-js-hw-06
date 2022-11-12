const numberCategoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${numberCategoriesEl.length}`);

const list = document.querySelectorAll('#categories > li');
list.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
});
