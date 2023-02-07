// Завдання №1
// Порахувати та вивести у консоль кількість категорій в ul#categories (li.item)

const listEl = document.querySelector('#categories');
const numberOfCategories = listEl.children.length;

console.log('numberOfCategories: ', numberOfCategories);

//
//
//

// Завдання №2
// Для кожного элемента li.item у списку ul#categories, знайти і вивести в консоль текст заголовку елемента
// (тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

for (let i = 0; i < numberOfCategories; i += 1) {
  console.log('Category: ', listEl.children[i].querySelector('h2').textContent);
  console.log('Elements: ', listEl.children[i].querySelector('ul').children.length);
}
