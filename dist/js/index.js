"use strict";for(var buttons=document.querySelectorAll(".calc__button"),resultDisplay=document.querySelector("#resultDisplay"),result=[],isResult,calculateResult=function calculateResult(array){array=array.join("");var calculatedResult=eval(array);return 11<calculatedResult.toString().length?(array=[],array.push(calculatedResult.toString().slice(0,10))):(console.log(),array=[],array.push(calculatedResult),isResult=!0),console.log(array),array},cardDraw=function(){var l=document.querySelectorAll(".result__cards--card");resultDisplay.innerText="";for(var e=0;e<l.length;e++)l[e].classList.remove("card__active"),l[e].classList.remove("drawing");for(var t=function(e){var t=e;setTimeout(function(){l[t%4].classList.add("drawing")},200*e)},s=0;s<20;s++)t(s);setTimeout(function(){for(var e=function(e){var t=e;setTimeout(function(){l[t%4].classList.remove("drawing")},200*e)},t=0;t<20;t++)e(t)},300),setTimeout(function(){var e=Math.ceil(4*Math.random()),t=Math.ceil(13*Math.random());l[e-1].classList.add("drawing"),l[e-1].classList.add("card__active"),resultDisplay.innerText="-".concat(t,"-")},4200)},i=0;i<buttons.length;i++)buttons[i].addEventListener("click",function(e){return function(){"C"==buttons[e].dataset.value&&(resultDisplay.innerText="0",result=[]),"card"==buttons[e].dataset.value&&cardDraw(),resultDisplay.innerText.length<11&&(/[0-9]/.test(buttons[e].dataset.value)&&(isResult&&(result=[]),result.push(buttons[e].dataset.value),resultDisplay.innerText=result.join("")),"AC"==buttons[e].dataset.value&&(resultDisplay.innerText="",result=[]),"="==buttons[e].dataset.value&&(calculateResult(result),result=calculateResult(result),10<calculateResult(result).length&&(resultDisplay.innerText=calculateResult(result).toString().slice(0,10)),resultDisplay.innerText=calculateResult(result)))}}(i));var setForNumpad={NumpadAdd:"+",NumpadSubtract:"-",NumpadMultiply:"*",NumpadDivide:"/",NumpadDecimal:"."};document.addEventListener("keypress",function(e){console.log(result),console.log(isResult),"Delete"==e.code&&(resultDisplay.innerText="0",result=[]),resultDisplay.innerText.length<11&&(/[0-9]/.test(e.code.charAt(e.code.length-1))&&(isResult&&(result=[]),isResult=!1,result.push(e.code.charAt(e.code.length-1)),resultDisplay.innerText=result.join("")),0<=Object.keys(setForNumpad).indexOf(e.code)&&0<result.length&&(isResult=!1,result.push(Object.values(setForNumpad)[Object.keys(setForNumpad).indexOf(e.code)]),resultDisplay.innerText=result.join(""))),"NumpadEnter"==e.code&&(console.log("lpol"),calculateResult(result),result=calculateResult(result),10<calculateResult(result).length&&(resultDisplay.innerText=calculateResult(result).toString().slice(0,9)),resultDisplay.innerText=calculateResult(result))}),module.exports={calculateResult:calculateResult};