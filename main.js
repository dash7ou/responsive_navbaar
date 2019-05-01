const signUpB = document.getElementById('signUp');
const signInB = document.getElementById('signIn');
const container = document.getElementById('container');

signUpB.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInB.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});
