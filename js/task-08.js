const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const isEmailEmpty = event.currentTarget.elements.email.value === '';
  const isPasswordEmpty = event.currentTarget.elements.password.value === '';

  if (isEmailEmpty || isPasswordEmpty) {
    alert('Всі поля повинні бути заповнені!');
    return;
  }

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const formData = { email, password };

  console.log(formData);

  event.currentTarget.reset();
});
