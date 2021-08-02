/**given 2 numbers, return a random number between them */

function random(number1, number2) {
    return Math.round(Math.random() * (number2 - number1) + number1);
}

console.log(random(1, 1000));