const buttons = document.querySelectorAll('.calc__button');
const displayOne = document.querySelector('#resultDisplay');
console.log(buttons)

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', ((j) => {
    return function () {
      resultDisplay.innerText += '' + buttons[j].innerText;
      if (buttons[j].innerText == 'C') {
        resultDisplay.innerText = '';
      }
    }
  })(i))
}