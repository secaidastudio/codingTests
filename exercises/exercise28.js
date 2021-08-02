/**given a number, return it factorial
 * 
 * example:
 * factorial(3);
 * returns 6
 */

function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(3));