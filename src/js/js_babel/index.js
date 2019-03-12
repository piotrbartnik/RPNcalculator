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
        resultDisplay.innerText = '';
        result = [];
      }

      if (buttons[j].dataset.value == '=') {
        result = result.join("");
        var calculatedResult = eval(result);
        resultDisplay.innerText = calculatedResult;
        result = [];
        result.push(calculatedResult);
      }
    };
  }(i));
}