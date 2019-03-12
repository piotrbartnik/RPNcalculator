const buttons = document.querySelectorAll('.calc__button');
const displayOne = document.querySelector('#resultDisplay');
let result = [];

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', ((j) => {
    return function () {
      if (resultDisplay.innerText.length < 12) {
        if (buttons[j].dataset.value != '=') {
          result.push(buttons[j].dataset.value);
          resultDisplay.innerText = result.join('');
        }
        if (buttons[j].dataset.value == 'C') {
          resultDisplay.innerText = '0';
          result = [];
        }
        if (buttons[j].dataset.value == 'AC') {
          resultDisplay.innerText = '';
          result = [];
        }
        if (buttons[j].dataset.value == '=') {
          result = result.join("");
          let calculatedResult = eval(result);
          if (calculatedResult.toString().length > 11) {
            resultDisplay.innerText = calculatedResult.toString().slice(0, 10);
            console.log('jajks')
            result = [];
            result.push(calculatedResult.toString().slice(0, 10))
          } else {
            resultDisplay.innerText = calculatedResult;
            result = [];
            result.push(calculatedResult)
          }
        }
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
  if (resultDisplay.innerText.length < 12) {
    if (/[0-9]/.test(e.code.charAt(e.code.length - 1))) {
      result.push(e.code.charAt(e.code.length - 1));
      resultDisplay.innerText = result.join('');
    }
    if (Object.keys(setForNumpad).indexOf(e.code) >= 0 && result.length > 0) {
      result.push(Object.values(setForNumpad)[Object.keys(setForNumpad).indexOf(e.code)]);
      resultDisplay.innerText = result.join('');
    }
    if (e.code == "Delete") {
      resultDisplay.innerText = '0';
      result = [];
    }
    if (e.code == "NumpadEnter") {
      result = result.join("");
      let calculatedResult = eval(result);
      if (calculatedResult.toString().length > 11) {
        resultDisplay.innerText = calculatedResult.toString().slice(0, 10);
        console.log('jajks')
        result = [];
        result.push(calculatedResult.toString().slice(0, 10))
      } else {
        resultDisplay.innerText = calculatedResult;
        result = [];
        result.push(calculatedResult)
      }
    }
  }
});