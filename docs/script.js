const passwordField = document.querySelector('.password-field');
const confirmPasswordField = document.querySelector('.confirm-password-field');
const pwCharacterCountAlert = document.querySelector('.pw-count');
const pwCaseCheckAlert = document.querySelector('.pw-case');
const pwNumCheckAlert = document.querySelector('.pw-num');
const pwCharacterCheckAlert = document.querySelector('.pw-char');
const pwCheckElements = document.querySelectorAll('.pw-chk');

passwordField.addEventListener('input', e => testPassword(e));

function testPassword(inputEvent) {

  const valid = '';
  const invalid= 'false';
  const currentInput = inputEvent.target.value;
  
  passwordField.setCustomValidity(invalid);

  if (currentInput.length < 12) {
    pwCharacterCountAlert.classList.add('invalid-element');
    pwCharacterCountAlert.classList.remove('valid-element');
  } else {
    pwCharacterCountAlert.classList.remove('invalid-element');
    pwCharacterCountAlert.classList.add('valid-element');
  }

  if (currentInput.match(/[A-Z]/)) {
    pwCaseCheckAlert.classList.remove('invalid-element');
    pwCaseCheckAlert.classList.add('valid-element');
  } else {
    pwCaseCheckAlert.classList.remove('valid-element');
    pwCaseCheckAlert.classList.add('invalid-element');
  }

  if (currentInput.match(/\d/)) {
    pwNumCheckAlert.classList.remove('invalid-element');
    pwNumCheckAlert.classList.add('valid-element');
  } else {
    pwNumCheckAlert.classList.remove('valid-element');
    pwNumCheckAlert.classList.add('invalid-element');
  }

  if (currentInput.match(/[^A-Z0-9\s]/i)) {
    pwCharacterCheckAlert.classList.remove('invalid-element');
    pwCharacterCheckAlert.classList.add('valid-element');
  } else {
    pwCharacterCheckAlert.classList.remove('valid-element');
    pwCharacterCheckAlert.classList.add('invalid-element');
  }

  const invalidElements = document.querySelectorAll('.pw-chk.invalid-element')

  if (invalidElements.length === 0) {
    passwordField.setCustomValidity(valid);
  }
}

confirmPasswordField.addEventListener('input', e => confirmPasswordMatch(e));

function confirmPasswordMatch(input) {

  const password = passwordField.value;
  const currentInput = input.target.value;
  const valid = '';
  const invalid= 'false';

  confirmPasswordField.setCustomValidity(invalid);

  if (currentInput === password) {
    confirmPasswordField.setCustomValidity(valid);
  }
}
