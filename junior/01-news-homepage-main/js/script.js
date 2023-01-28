const buttonMenu = document.querySelector('.menu-button')

function showMenu() {
  function activeButtonMenu() {
    const imgMenu = document.querySelector('.img-menu')
    buttonMenu.classList.toggle('active')

    const buttonActive = buttonMenu.classList.contains('active')

    if (buttonActive) {
      imgMenu.setAttribute('src', '../assets/images/icon-menu-close.svg')
    } else {
      imgMenu.setAttribute('src', '../assets/images/icon-menu.svg')
    }
  }
  activeButtonMenu()

  function activeMenu() {
    const navMenu = document.querySelector('.nav-menu')
    navMenu.classList.toggle('active')

    return true
  }
  activeMenu()

  function desfoqueSideMenu() {
    const desfoquePage = document.querySelector('.desfoque-page')
    desfoquePage.classList.toggle('active')
  }
  desfoqueSideMenu()
}

buttonMenu.addEventListener('click', showMenu)