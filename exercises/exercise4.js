/*Given a string, turn it around without using and JS methods, only control structures */

function reverseText(text) {
    let inverted = "";
    for (let letter of text) {
        inverted = letter + inverted;
    }
    return (inverted);
}

//easy way//

function textReversed(text) {
    return text.split('').reverse().join('');
}

//end of the easy way

console.log("Reversed text: ", reverseText("oscar"));
console.log("Reversed text: ", textReversed("oscar"));