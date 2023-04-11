import pizze from './db.js'

const noVegIngredients = ['salame', 'mozzarella', 'salsiccia', 'acciughe', 'prosciutto', 'grana', 'scamorza', 'gorgonzola'];

const pizzeRemap = pizze.map(pizza => {
  const {name, image, price, description, ingredients, votes} = pizza
  const isVeg = checkVeg(ingredients);
  return {name, image, price, description, ingredients, votes, isVeg}
});


console.log('array pizzeremap', pizzeRemap);

function checkVeg(ingredients) {
  const noVegIngredients = ['salame', 'mozzarella', 'salsiccia', 'acciughe', 'prosciutto', 'grana', 'scamorza', 'gorgonzola'];
  let isVeg = true;

  ingredients.forEach(ingredient => {
    if (noVegIngredients.includes(ingredient)) isVeg = false;

  });
  return isVeg;
};