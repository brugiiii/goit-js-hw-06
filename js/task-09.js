function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanEl: document.querySelector('.color'),
  changeColorButtonEl: document.querySelector('.change-color'),
};

const onButtonClick = () => {
  const getColor = getRandomHexColor();
  refs.spanEl.textContent = getColor;
  document.body.style.backgroundColor = getColor;
};

refs.changeColorButtonEl.addEventListener('click', onButtonClick);
