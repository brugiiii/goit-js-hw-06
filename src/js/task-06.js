const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
  const inputValue = event.currentTarget;
  if (Number(inputValue.dataset.length) === inputValue.value.length) {
    inputEl.classList = 'valid';
  } else {
    inputEl.classList = 'invalid';
  }
});
