const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



let ulEl = document.querySelector('ul#ingredients');

console.log(ulEl);

let liArr = ingredients.map( ingredient => {

let liEl = document.createElement("li");

liEl.className = "item";
liEl.textContent = ingredient;

console.log(liEl);

return liEl;
});
ulEl.append(...liArr);
