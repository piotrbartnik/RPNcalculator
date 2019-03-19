const buttons = document.querySelectorAll('.calc__button');
const resultDisplay = document.querySelector('#resultDisplay');
let result = [];
let isResult;

let calculateResult = (array) => {
  array = array.join("");
  let calculatedResult = eval(array);
  if (calculatedResult.toString().length > 11) {
    array = [];
    array.push(calculatedResult.toString().slice(0, 10))
  } else {
    array = [];
    array.push(calculatedResult)
    isResult = true;
  }
  return calculatedResult, array;
}

let cardDraw = () => {
  let cardSquares = document.querySelectorAll(".result__cards--card");
  resultDisplay.innerText = "";
  for (let i = 0; i < cardSquares.length; i++) {
    cardSquares[i].classList.remove('card__active');
    cardSquares[i].classList.remove('drawing');
  }
  for (let i = 0; i < 20; i++) {
    let j = i;
    setTimeout(() => {
      cardSquares[j % 4].classList.add('drawing');
    }, 200 * i);
  }
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      let j = i;
      setTimeout(() => {
        cardSquares[j % 4].classList.remove('drawing');
      }, 200 * i)
    }
  }, 300);
  setTimeout(() => {
    let cardDrawResult = Math.ceil(Math.random() * 4);
    let numberDrawResult = Math.ceil(Math.random() * 13);
    cardSquares[cardDrawResult - 1].classList.add('drawing');
    cardSquares[cardDrawResult - 1].classList.add('card__active');
    resultDisplay.innerText = `-${numberDrawResult}-`;
  }, 4200)
}

let buttonMathOperands = ['*', '+', '-', '/', '%', '.']

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', ((j) => {
    return () => {
      if (buttons[j].dataset.value == 'C') {
        resultDisplay.innerText = '0';
        result = [];
      }
      if (buttons[j].dataset.value == 'card') {
        cardDraw()
      }
      if (resultDisplay.innerText.length < 11) {
        if (/[0-9]/.test(buttons[j].dataset.value)) {
          if (isResult) {
            result = [];
          }
          result.push(buttons[j].dataset.value);
          resultDisplay.innerText = result.join('');
        }        
      }
      if (resultDisplay.innerText.length < 10) {
        if (buttonMathOperands.indexOf(buttons[j].dataset.value) != -1) {
          isResult = false;
          result.push(buttons[j].dataset.value);
          resultDisplay.innerText = result.join('');
        }        
      }
      if (buttons[j].dataset.value == 'AC') {
        resultDisplay.innerText = '';
        result = [];
      }
      if (buttons[j].dataset.value == '=') {
        calculateResult(result);
        result = calculateResult(result)
        if (calculateResult(result).length > 10) {
          resultDisplay.innerText = calculateResult(result).toString().slice(0, 10);
        }
        resultDisplay.innerText = calculateResult(result);
      }
    }
  })(i));
};

let setForNumpad = {
  "NumpadAdd": '+',
  "NumpadSubtract": "-",
  "NumpadMultiply": "*",
  "NumpadDivide": "/",
  "NumpadDecimal": "."
}

document.addEventListener('keypress', (e) => {
  if (e.code == "Delete") {
    resultDisplay.innerText = '0';
    result = [];
  }
  if (resultDisplay.innerText.length < 11) {
    if (/[0-9]/.test(e.code.charAt(e.code.length - 1))) {
      if (isResult) {
        result = [];
      }
      isResult = false;
      result.push(e.code.charAt(e.code.length - 1));
      resultDisplay.innerText = result.join('');
    }
  }
  if (resultDisplay.innerText.length < 10) {
    if (Object.keys(setForNumpad).indexOf(e.code) >= 0 && result.length > 0 && /[0-9]/.test(result[result.length - 1])) {
      isResult = false;
      result.push(Object.values(setForNumpad)[Object.keys(setForNumpad).indexOf(e.code)]);
      resultDisplay.innerText = result.join('');
    }
  }
  if (e.code == "NumpadEnter") {
    calculateResult(result);
    result = calculateResult(result)
    if (calculateResult(result).length > 10) {
      resultDisplay.innerText = calculateResult(result).toString().slice(0, 9);
    }
    resultDisplay.innerText = calculateResult(result);
  }
});


module.exports = {
  calculateResult: calculateResult
}