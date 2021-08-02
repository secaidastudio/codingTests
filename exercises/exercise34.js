/** given 2 numbers, create a calculator that add, rest, multiplies and divides*/

function calculator(number1, number2) {
    let result = `
    The sum is: ${number1 + number2}
    The substraction is: ${number1 - number2}
    The multiplication is: ${number1 * number2}
    The division is: ${number1 / number2}    
    `;

    return result;

}
console.log(calculator(3, 3));