/**given a string and a number N, repeat the string N times
 * function("oscar",2);
 * returns "oscar oscar"
 */

//classic function
function repeatString(text, number) {
    let textRepeated = "";
    for (let i = 0; i < number; i++) {
        textRepeated += text;
    }
    return textRepeated
}

console.log(repeatString("oscar paiz", 3));
//protoptype function
String.prototype.repeatString = function(number) {
    let textRepeated = "";
    for (let i = 0; i < number; i++) {
        textRepeated += this;
    }
    return textRepeated
}
console.log("oscar rolando".repeatString(4))