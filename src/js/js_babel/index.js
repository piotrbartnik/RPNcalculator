"use strict";

var buttons = document.querySelectorAll('.calc__button');
var displayOne = document.querySelector('#resultDisplay');
console.log(buttons);

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (j) {
    return function () {
      resultDisplay.innerText += '' + buttons[j].innerText;

      if (buttons[j].innerText == 'C') {
        resultDisplay.innerText = '';
      }

      if (buttons[j].innerText == '=') {
        resultDisplay.innerText = resultDisplay.innerText.slice(0, -1);
        var result = eval('6x5');
        resultDisplay.innerText = result;
      }
    };
  }(i));
}