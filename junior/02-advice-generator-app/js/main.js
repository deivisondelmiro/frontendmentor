const buttonAdvice = document.querySelector('.containerDice');
const titleAdviceNumber = document.querySelector('#adviceNumber');
const paragraphAdvice = document.querySelector('.paragraphAdvice');

function generatorAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(dataAdvices => {
      const advice = dataAdvices.slip.advice;
      const titleNumber = dataAdvices.slip.id;
      paragraphAdvice.innerText = advice;
      titleAdviceNumber.innerText = titleNumber;
    })
}

buttonAdvice.addEventListener('click', generatorAdvice);