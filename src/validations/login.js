import validator from 'validator';

function validateInput(data) {
  const errors = {};

  if (validator.isEmpty(data.identifier)) {
    errors.identifier = "Поле 'Имя' является обязательным";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Поле 'Пароль' является обязательным";
  }
  const isValid = Object.keys(errors).length === 0;

  return {
    errors,
    isValid
  }
}

export default validateInput;
