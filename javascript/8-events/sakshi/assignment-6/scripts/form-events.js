const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

username.addEventListener('input', () => {
  if (username.value.trim().length < 3) {
    usernameError.textContent = 'Username must be at least 3 characters';
  } else {
    usernameError.textContent = '';
  }
});

email.addEventListener('input', () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    emailError.textContent = 'Invalid email format';
  } else {
    emailError.textContent = '';
  }
});

password.addEventListener('input', () => {
  if (password.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
  } else {
    passwordError.textContent = '';
  }
});

document.getElementById('registerForm').addEventListener('submit', (event) => {
  if (usernameError.textContent || emailError.textContent || passwordError.textContent) {
    event.preventDefault();
    alert('Please fix the errors before submitting');
  }
});
