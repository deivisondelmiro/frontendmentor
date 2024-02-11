const menuButton = document.querySelector('.menuIcon');
const navListItems = document.querySelector('nav ul');

menuButton.addEventListener('click', initChangeMenu);

function initChangeMenu() {
  menuButton.classList.toggle('active');
  navListItems.classList.toggle('active');
}