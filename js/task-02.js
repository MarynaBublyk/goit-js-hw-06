const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const itemList = ingredients.map((ingredient) => {
  const li = (document.createElement("li"));
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});
list.append(...itemList);


