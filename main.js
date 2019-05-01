const option = document.querySelector('.nav-option');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

option.addEventListener('click', () => {
  nav.classList.toggle('nav-active');

  //Animation links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
        0.3}s`;
    }
  });
  option.classList.toggle('xx');
});
