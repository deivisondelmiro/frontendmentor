const buttonMenu = document.querySelector('.menu-button')

function showMenu() {
  function activeButtonMenu() {
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