let rpn = (eq) => {
  let operands = ["+", "-", "*", "/"]
  let nums = [];
  let arrOperands = [];
  for (let i = 0; i < eq.length; i++) {
    if (/\d+/.test(eq[i])) {
      nums.push(eq[i])
    }
    if (/\.{1}/.test(eq[i])) {
      nums.push(eq[i]);
    }
    if (operands.indexOf(eq[i]) != -1) {
      if (((eq[i] === "-" || eq[i] === "+") && arrOperands[0] === "*") || (eq[i] === "*" && arrOperands[0] === "/")) {
        nums.push(arrOperands[0])
        arrOperands.splice(0, 1)
      }
      arrOperands.unshift(eq[i])
    }
  }
  nums = nums.concat(arrOperands).join(" ");
  return nums.replace(/\s(\.)\s/, '$1');
}

if (typeof module === 'undefined') {
} else {
  module.exports = {
    rpn: rpn
  }
}