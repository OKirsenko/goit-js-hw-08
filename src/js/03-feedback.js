import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const KEY_STRING = 'feedback-form-state';
const formData = {};
const addData = localStorage.getItem(KEY_STRING);

fillingInput();

function fillingInput() {
  if (JSON.parse(addData)) {
    console.log(JSON.parse(addData));
    input.value = JSON.parse(addData).email;
    textarea.value = JSON.parse(addData).message;
  }
}

form.addEventListener('submit', removeFormInput);
function removeFormInput(event) {
  event.preventDefault();
  console.log(JSON.parse(addData));
  event.currentTarget.reset();
  localStorage.removeItem(KEY_STRING);
}

form.addEventListener('input', throttle(updateInput, 500));
function updateInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(KEY_STRING, JSON.stringify(formData));
}
