// Завдання:
// Створити окремий елемент <li>. Обов'язково використовуючи метод document.createElement().
// Додати назву інгредієнта як його текстовий вміст.
// Додати елементу клас item.
// Після чого, вставити усі <li> за одну операцію у список ul#ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const makeIngredientsCard = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = ingredient;

  return ingredientEl;
});

const ingredientsContainerEl = document.querySelector('#ingredients');

ingredientsContainerEl.append(...makeIngredientsCard);

//
//
//

// Можна було записати функцію для створення елементу, а далі кожен аргумент передавати через map, як у варіанті який я закоментував нижче.
// Я вирішив функцію створення одного інгрідієнту одразу передати колбеком в map

// const makeIngredientsCard = ingredient => {
//   const ingredientEl = document.createElement('li');
//   ingredientEl.textContent = ingredient;
//   ingredientEl.classList.add('item');

//   return ingredientEl;
// };

// const elements = ingredients.map(makeIngredientsCard);

// ingredientsContainerEl.append(...elements);
