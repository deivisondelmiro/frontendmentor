const form = document.querySelector('#form')
const spanError = document.querySelector('.error')
const button = form.elements[1]
form.addEventListener('change', validityInput)
button.addEventListener('click', validityInputClick)

function validityInput(event) {
  const target = event.target

  if(!target.checkValidity()) {
    target.classList.add('errorActive')
    spanErrorAdd(event)
  } else {
    target.classList.remove('errorActive')
    spanErroRemove()
  }
}

function validityInputClick(event) {
  const input = form.elements[0]
  event.preventDefault()

  validityInput();
  if(input.value.length === 0) {
    input.classList.add('errorActive')
    spanError.classList.add('active')
    spanError.innerText = input.validationMessage
  } else {
    input.classList.remove('errorActive')
    spanErroRemove()
  }
}

function spanErrorAdd(event) {
  const target = event.target
  spanError.classList.add('active')
  spanError.innerText = target.validationMessage
}

function spanErroRemove() {
  spanError.innerText = ''
  spanError.classList.remove('active')
}