"use strict";var rpn=function(e){for(var n=["+","-","*","/"],t=[],s=[],r=0;r<e.length;r++)/\d+/.test(e[r])&&t.push(e[r]),/\.{1}/.test(e[r])&&t.push(e[r]),-1!=n.indexOf(e[r])&&((("-"===e[r]||"+"===e[r])&&"*"===s[0]||"*"===e[r]&&"/"===s[0])&&(t.push(s[0]),s.splice(0,1)),s.unshift(e[r]));return(t=t.concat(s).join(" ")).replace(/\s(\.)\s/,"$1")};"undefined"==typeof module||(module.exports={rpn:rpn});