let counterValue = 0;

const refs = {
  valueEl: document.querySelector('#value'),
  ascedingButtonEl: document.querySelector('[data-action="increment"]'),
  descedingButtonEl: document.querySelector('[data-action="decrement"]'),
};

const onIncrementButtonClick = () => {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
};

const onDecrementButtonClick = () => {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
};

refs.ascedingButtonEl.addEventListener('click', onIncrementButtonClick);

refs.descedingButtonEl.addEventListener('click', onDecrementButtonClick);
