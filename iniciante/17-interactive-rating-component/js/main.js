let buttonsNumbersList = document.querySelectorAll(".listNumbers li");
buttonsNumbersList = Array.from(buttonsNumbersList);

let verificationFunctionActiveMensage = false;
let verificationFunctionActiveError = false;
let errorSpan = "";

const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", confirmSelection);

buttonsNumbersList.forEach((item) => {
  item.addEventListener("click", function() {
    removeActiveButton();
    addActiveButton(item);
  })
})

function removeActiveButton() {
  buttonsNumbersList.forEach((item) => {
    addRemoveClass("remove", item, "patternLi", "active");
  })
}

function addActiveButton(item) {
  addRemoveClass("add", item, "active", "patternLi");
  if(verificationFunctionActiveError) {
    removerErrorAlert();
  }
}

function addRemoveClass(valueVerification, item, classAdd, classRemove) {
  const itemSelected = item;
  itemSelected.classList.add(classAdd);
  itemSelected.classList.remove(classRemove);
  if(valueVerification === "add") {
    addNumberMensage(itemSelected.innerText);
  }
}

function addNumberMensage(itemValue) {
  verificationFunctionActiveMensage = true;
  const numberSelected = document.querySelector(".itemSelected");
  if (itemValue != numberSelected.innerText) {
    numberSelected.innerText = itemValue;
  }
}

function confirmSelection(event) {
  event.preventDefault();
  if (verificationFunctionActiveMensage) {
    const firsContainer = document.querySelector(".containerFirstScreen");
    const secondContainer = document.querySelector(".containerSecondScreen");
    firsContainer.style.display = "none";
    secondContainer.style.display = "Inherit";
  } else {
    errorAlert();
  }
}

function errorAlert() {
  if (!verificationFunctionActiveError) {
    const main = document.querySelector("main");
    errorSpan = document.createElement("span");
    errorSpan.innerText = "Error! Mark some number before to submit!";
    errorSpan.style.color = "var(--orange)";
    errorSpan.style.textAlign = "center";

    main.appendChild(errorSpan);
    verificationFunctionActiveError = true;
  }
}

function removerErrorAlert() {
  errorSpan.style.display ="none";
  verificationFunctionActiveError = false;
}