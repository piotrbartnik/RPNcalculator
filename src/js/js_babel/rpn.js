"use strict";

var rpn = function rpn(eq) {
  var operands = ["+", "-", "*", "/"];
  var nums = [];
  var arrOperands = [];

  for (var i = 0; i < eq.length; i++) {
    if (/[0-9]+/.test(eq[i])) {
      nums.push(eq[i]);
    }

    if (operands.indexOf(eq[i]) != -1) {
      if ((eq[i] === "-" || eq[i] === "+") && arrOperands[0] === "*" || eq[i] === "*" && arrOperands[0] === "/") {
        nums.push(arrOperands[0]);
        arrOperands.splice(0, 1);
      }

      arrOperands.unshift(eq[i]);
    }
  }

  return nums.concat(arrOperands).join(" ");
};

module.exports = {
  rpn: rpn
};