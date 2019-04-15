"use strict";

var buttons = document.querySelectorAll('.calc__button');
var resultDisplay = document.querySelector('#resultDisplay');
var rpnDisplay = document.querySelector('#rpnDisplay');
var result = [];
var rpnArr = [];
var isResult;

var rpnReady = function rpnReady(array) {
  var emptyString = "";
  var rpnReadyArray = [];

  for (i = 0; i <= array.length; i++) {
    if (/\d/.test(array[i])) {
      emptyString += array[i];
    } else if (!/\d/.test(array[i])) {
      rpnReadyArray.push(emptyString);
      emptyString = '';
      rpnReadyArray.push(array[i]);
    }
  }

  console.log(rpnReadyArray.slice(0, -1));
  return rpnReadyArray.slice(0, -1);
};

var calculateResult = function calculateResult(array) {
  array = array.join("");
  var calculatedResult = eval(array);

  if (calculatedResult.toString().length > 11) {
    array = [];
    array.push(calculatedResult.toString().slice(0, 10));
  } else {
    array = [];
    array.push(calculatedResult);
    isResult = true;
  }

  return calculatedResult, array;
  ;
};

var cardDraw = function cardDraw() {
  var cardSquares = document.querySelectorAll(".result__cards--card");
  resultDisplay.innerText = "";

  for (var _i = 0; _i < cardSquares.length; _i++) {
    cardSquares[_i].classList.remove('card__active');

    cardSquares[_i].classList.remove('drawing');
  }

  var _loop = function _loop(_i2) {
    var j = _i2;
    setTimeout(function () {
      cardSquares[j % 4].classList.add('drawing');
    }, 200 * _i2);
  };

  for (var _i2 = 0; _i2 < 20; _i2++) {
    _loop(_i2);
  }

  setTimeout(function () {
    var _loop2 = function _loop2(_i3) {
      var j = _i3;
      setTimeout(function () {
        cardSquares[j % 4].classList.remove('drawing');
      }, 200 * _i3);
    };

    for (var _i3 = 0; _i3 < 20; _i3++) {
      _loop2(_i3);
    }
  }, 300);
  setTimeout(function () {
    var cardDrawResult = Math.ceil(Math.random() * 4);
    var numberDrawResult = Math.ceil(Math.random() * 13);
    cardSquares[cardDrawResult - 1].classList.add('drawing');
    cardSquares[cardDrawResult - 1].classList.add('card__active');
    resultDisplay.innerText = "-".concat(numberDrawResult, "-");
  }, 4200);
};

var buttonMathOperands = ['*', '+', '-', '/', '%', '.'];

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

      if (resultDisplay.innerText.length < 11) {
        if (/[0-9]/.test(buttons[j].dataset.value)) {
          if (isResult) {
            result = [];
          }

          isResult = false;
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
        rpnDisplay.innerHTML = rpn(rpnReady(result));
        result = calculateResult(result);

        if (calculateResult(result).length > 10) {
          resultDisplay.innerText = calculateResult(result).toString().slice(0, 10);
        }

        resultDisplay.innerText = calculateResult(result);
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
      rpnArr.push(result.join(''));
      result.push(Object.values(setForNumpad)[Object.keys(setForNumpad).indexOf(e.code)]);
      resultDisplay.innerText = result.join('');
    }
  }

  if (e.code == "NumpadEnter") {
    calculateResult(result);
    rpnDisplay.innerHTML = rpn(rpnReady(result));
    result = calculateResult(result);

    if (calculateResult(result).length > 10) {
      resultDisplay.innerText = calculateResult(result).toString().slice(0, 9);
    }

    resultDisplay.innerText = calculateResult(result);
  }
});

if (typeof module === 'undefined') {} else {
  module.exports = {
    calculateResult: calculateResult
  };
}