const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
  const isLengthCorrect = event.currentTarget.value.length == event.currentTarget.dataset.length;
  if (isLengthCorrect) {
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.replace('invalid', 'valid');
      return;
    }
    inputEl.classList.add('valid');
  } else {
    if (inputEl.classList.contains('valid')) {
      inputEl.classList.replace('valid', 'invalid');
      return;
    }
    inputEl.classList.add('invalid');
  }
});
