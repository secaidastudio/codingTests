'use strict'

//differences between var and let

//test with VAR
var numero = 40;
console.log(numero); //value 40
if (true) {
    var numero = 50;
    console.log(numero); //value 50
}

console.log(numero); //value 50

//test with LET

var text = "JavaScript course with SecaidaStudio";
console.log(text);

if (true) {
    let text = "SecaidaStudio test";
    console.log(text);
}

console.log(text);