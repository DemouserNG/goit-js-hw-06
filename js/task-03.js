const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const itemEl = document.createElement('li');
const itemEl2 = document.createElement('li');
const itemEl3 = document.createElement('li');

const imageEl = document.createElement('img');
imageEl.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imageEl.alt = 'White and Black Long Fur Cat';
imageEl.width = 340;
console.log(imageEl);

const imageEl2 = document.createElement('img');
imageEl2.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imageEl2.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
imageEl2.width = 340;
console.log(imageEl2);

const imageEl3 = document.createElement('img');
imageEl3.src =  'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imageEl3.alt = 'Group of Horses Running';
imageEl3.width = 340;
console.log(imageEl3);

document.body.appendChild(imageEl);
document.body.appendChild(imageEl2);
document.body.appendChild(imageEl3);