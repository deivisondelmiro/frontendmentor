const buttonMenu = document.querySelector('.menu-button')
const blurMenuPage = document.querySelector('.desfoque-page')
const main = document.querySelector('main')

buttonMenu.addEventListener('click', showMenu)
blurMenuPage.addEventListener('click', closeMenu)

function showMenu() {
  activeMenu()
  showButtonMenu()
  blurSideMenu()
}

function activeMenu() {
  const navMenu = document.querySelector('.nav-menu')
  navMenu.classList.toggle('active')
  return true
}

function closeMenu() {
  showMenu()
}

function showButtonMenu() {
  const imgMenu = document.querySelector('.img-menu')
  buttonMenu.classList.toggle('active')

  const buttonActive = buttonMenu.classList.contains('active')

  if (buttonActive) {
    imgMenu.setAttribute('src', './assets/images/icon-menu-close.svg')
    imgMenu.style.position = 'fixed'
    imgMenu.style.right = '20px'
    imgMenu.style.top = '38px'
  } else {
    imgMenu.setAttribute('src', './assets/images/icon-menu.svg')
    imgMenu.style.position = 'initial'
  }
}

function blurSideMenu() {
  blurMenuPage.classList.toggle('active')
}