const menuButton = document.querySelector('.top-bar button');
const menuIcons = document.querySelector('.top-bar__social');

menuButton.addEventListener('click', () => {
    menuIcons.classList.toggle('is-active');
    menuButton.classList.toggle('is-active');
});