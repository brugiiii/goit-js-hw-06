function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  createButtonEl: document.querySelector('[data-create]'),
  destroyButtonEl: document.querySelector('[data-destroy]'),
  boxesContainerEl: document.querySelector('#boxes'),
};

let value;
refs.inputEl.addEventListener('input', event => {
  value = event.currentTarget.value;
});

const onCreateButtonClick = () => {
  onDestroyButtonClick();
  createBoxes(value);
};

const onDestroyButtonClick = () => {
  refs.boxesContainerEl.innerHTML = '';
};

refs.createButtonEl.addEventListener('click', onCreateButtonClick);
refs.destroyButtonEl.addEventListener('click', onDestroyButtonClick);

// має створювати бокси
const createBoxes = amount => {
  if (amount > 100 || amount < 1) {
    alert('Введіть валідне значення (1-100)!');
    return;
  }

  let width = 20;
  let height = 20;
  let markup = '';

  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="background-color: ${getRandomHexColor()}; width: ${(width += 10)}px; height: ${(height += 10)}px;"></div>`;
  }
  refs.boxesContainerEl.insertAdjacentHTML('afterbegin', markup);
};
