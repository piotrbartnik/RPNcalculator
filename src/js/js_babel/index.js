"use strict";

var buttons = document.querySelectorAll('.calc__button');
var displayOne = document.querySelector('#resultDisplay');
var result = [];

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (j) {
    return function () {
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
        var calculatedResult = eval(result);

        if (calculatedResult.toString().length > 11) {
          resultDisplay.innerText = calculatedResult.toString().slice(0, 10);
          console.log('jajks');
          result = [];
          result.push(calculatedResult.toString().slice(0, 10));
        } else {
          resultDisplay.innerText = calculatedResult;
          result = [];
          result.push(calculatedResult);
        }
      }
    };
  }(i));
}

;
document.addEventListener('keyup', function (e) {
  if (e.code.charAt(e.code.length - 1) != '=') {
    result.push(e.code.charAt(e.code.length - 1));
    resultDisplay.innerText = result.join('');
  }
});