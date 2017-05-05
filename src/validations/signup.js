import validator from 'validator';

function validateInput(data) {
  const errors = {};

  if (validator.isEmpty(data.username)) {
    errors.username = 'Поле является обязательным';
  }
  if (validator.isEmpty(data.email)) {
    errors.email = 'Поле является обязательным';
  }
  if (!validator.isEmail(data.email)) {
    errors.email = 'Неправильный email';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'Поле является обязательным';
  }
  if (validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = 'Поле является обязательным';
  }
  if (!validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = 'Пароли должны совпадать';
  }
  const isValid = Object.keys(errors).length === 0;

  return {
    errors,
    isValid
  }
}

export default validateInput;
