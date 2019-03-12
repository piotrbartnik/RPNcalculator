const buttons = document.querySelectorAll('.calc__button');
const displayOne = document.querySelector('#resultDisplay');
let result = [];

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', ((j) => {
    return function () {
      if (buttons[j].dataset.value != '=') {
        result.push(buttons[j].dataset.value)
        resultDisplay.innerText = result.join('');
      }
      if (buttons[j].dataset.value == 'C') {
        resultDisplay.innerText = '';
        result = [];
      }
      if (buttons[j].dataset.value == '=') {
        result = result.join("");
        let calculatedResult = eval(result);
        resultDisplay.innerText = calculatedResult;
        result = [];
        result.push(calculatedResult)
      }
    }
  })(i));
}