const refs = {
  rangeInputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.rangeInputEl.addEventListener('input', event => {
  refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
});
