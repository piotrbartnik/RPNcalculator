"use strict";

var buttons = document.querySelectorAll('.calc__button');
var displayOne = document.querySelector('#resultDisplay');
var result = [];

var cardDraw = function cardDraw() {
  var cardDrawResult = Math.ceil(Math.random() * 4);
  var cardSquares = document.querySelectorAll(".result__cards--card");
  console.log(cardDrawResult, cardSquares);
};

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (j) {
    return function () {
      if (buttons[j].dataset.value == 'C') {
        resultDisplay.innerText = '0';
        result = [];
      }

      if (buttons[j].dataset.value == 'card') {
        cardDraw();
      }

      if (resultDisplay.innerText.length < 12) {
        if (/[0-9]/.test(buttons[j].dataset.value)) {
          result.push(buttons[j].dataset.value);
          resultDisplay.innerText = result.join('');
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
      }
    };
  }(i));
}

;
var setForNumpad = {
  "NumpadAdd": '+',
  "NumpadSubtract": "-",
  "NumpadMultiply": "*",
  "NumpadDivide": "/",
  "NumpadDecimal": "."
};
document.addEventListener('keypress', function (e) {
  if (e.code == "Delete") {
    resultDisplay.innerText = '0';
    result = [];
  }

  if (resultDisplay.innerText.length < 12) {
    if (/[0-9]/.test(e.code.charAt(e.code.length - 1))) {
      result.push(e.code.charAt(e.code.length - 1));
      resultDisplay.innerText = result.join('');
    }

    if (Object.keys(setForNumpad).indexOf(e.code) >= 0 && result.length > 0) {
      result.push(Object.values(setForNumpad)[Object.keys(setForNumpad).indexOf(e.code)]);
      resultDisplay.innerText = result.join('');
    }

    if (e.code == "NumpadEnter") {
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
  }
});