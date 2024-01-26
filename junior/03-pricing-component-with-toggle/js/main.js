let buttonChangePrice = document.querySelector('.containerButton');
let buttonChangePriceSpan = document.querySelector('.buttonCircle');
buttonChangePrice.addEventListener('click', verificationClassButton);
let objetcValueDataOriginal = [];
let objetcValueDataCopy = [];

function getDatas() {
  let itemPlansArray = document.querySelectorAll('.item-plan');
  itemPlansArray = Array.from(itemPlansArray);

  var [itemBasic, itemProfessional, itemMaster] = itemPlansArray;
  organizeData(itemBasic);
  organizeData(itemProfessional);
  organizeData(itemMaster);
}

function organizeData(itemPlan) {
  let priceValueNumber = itemPlan.querySelector('.priceNumber');
  let sizeValueNumber = itemPlan.querySelector('.numberGBStorage');
  let usersValueNumber = itemPlan.querySelector('.numberUsers');
  let sendUpValueNumber = itemPlan.querySelector('.numberGBSendUp');

  let objetcValueData = {
    priceValue: priceValueNumber,
    sizeValue: sizeValueNumber,
    usersValue: usersValueNumber,
    sendUpValue: sendUpValueNumber,
  }
  objetcValueDataOriginal.push(objetcValueData);
  objetcValueDataCopy.push(objetcValueData);
}

function verificationClassButton() {
  buttonChangePrice.classList.toggle('buttonActive');
  buttonChangePriceSpan.classList.toggle('buttonCircleActive');

  startChange();
}

function startChange() {
  let verificationButton = buttonChangePrice.classList.contains('buttonActive');
  if (verificationButton) {
    changeForNewPrice(objetcValueDataOriginal[0], "199.99", "900", "10", "30");
    changeForNewPrice(objetcValueDataOriginal[1], "249.99", "10", "50", "100");
    changeForNewPrice(objetcValueDataOriginal[2], "399.99", "20", "100", "200");
  } else {
    changeForNewPrice(objetcValueDataOriginal[0], "19.99", "500", "2", "3");
    changeForNewPrice(objetcValueDataOriginal[1], "24.99", "2", "5", "10");
    changeForNewPrice(objetcValueDataOriginal[2], "39.99", "2", "10", "20");
  }
}

function changeForNewPrice(object, price, size, users, sendUp) {
    object.priceValue.innerText = price;
    object.sizeValue.innerText = size;
    object.usersValue.innerText = users;
    object.sendUpValue.innerText = sendUp;
}

function initProcess() {
  getDatas();
}

initProcess();