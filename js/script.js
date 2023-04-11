import pizze from './db.js';
import {checkVeg} from './functions.js'

const ul = document.querySelector('ul')

const submit = document.getElementById('submit');

const noVegIngredients = ['salame', 'mozzarella', 'salsiccia', 'acciughe', 'prosciutto', 'grana', 'scamorza', 'gorgonzola'];

const pizzeRemap = pizze.map(pizza => {
  const {name, image, price, description, ingredients, votes} = pizza
  const isVeg = checkVeg(ingredients);
  return {name, image, price, description, ingredients, votes, isVeg}
});

pizzeRemap.sort((a,b) => a.price - b.price);

console.log('array pizzeremap', pizzeRemap);

pizzeRemap.forEach(pizza => {
  const li = document.createElement('li')
  li.innerHTML = `${pizza.name} € ${pizza.price.toFixed(2)}`;
  ul.appendChild(li);

});

submit.addEventListener('click', function(){
  const inputName = document.querySelector('[name="name"]');
  const inputPrice = document.querySelector('[name="price"]');
      selectedIngredients.push(ingredient.value);
  const selectIngredients = document.querySelector('[name="ingredients"]');
  
  const selectedIngredients = [];

  for(let ingredient of selectIngredients.options){
    if(ingredient.selected){
      selectedIngredients.push(ingredient.value);
    }

  }
  
  console.log(inputName.value, inputPrice.value, selectIngredients.options);

  // creiamo un nuovo oggetto al quale assegnamo il valore delle variabili come proprietà

  const newPizza = {

    name: inputName.value,
    price: inputPrice.value,
    ingredients: selectedIngredients,
  };

  console.warn('newPizza', newPizza);

  pizze.push(pizze)

});