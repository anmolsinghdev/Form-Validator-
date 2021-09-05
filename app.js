const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//functions
//function showError
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
  small.className = 'small visible';
}

//function showSuccess
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
  const small = formControl.querySelector('small');
  small.className = 'small';
}
//check is email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is Not Vaild');
  }
}

//function check
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
//function check length
function checklength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} is Must be ${min} char`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} Must be less then ${max} char`);
  } else {
    showSuccess(input);
  }
}

//check password match
function matchPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Password doesnt Match');
  }
}
// function getname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//function Submit
// function submit(e) {
// e.preventDefault();
// if (username.value === '') {
//   showError(username, 'Username Is Required');
// } else {
//   showSuccess(username);
// }
// if (email.value === '') {
//   showError(email, 'email Is Required');
// }
// //checking the email
// else if (!validateEmail(email.value)) {
//   showError(email, 'email Is not valid');
// } else {
//   showSuccess(email);
// }
// if (password.value === '') {
//   showError(password, 'password Is Required');
// } else {
//   showSuccess(password);
// }
// if (password2.value === '') {
//   showError(password2, 'password Is Required');
// } else {
//   showSuccess(password2);
// }
// }

//event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checklength(username, 5, 15);
  checklength(password, 6, 25);
  checklength(password2, 6, 25);
  checkEmail(email);
  matchPassword(password, password2);
});
