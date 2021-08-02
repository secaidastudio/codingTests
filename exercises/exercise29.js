/**given a number, return if it is a capicua number or not
 * capicua(2002) return true
 * capicua(2014) return false
 * 
 * create a function with a parameter of number
 * convert it into string
 * convert it into an array
 * turn it down
 * join it and converted back to a string
 */

function capicua(number) {
    let processed = parseInt(number
        .toString()
        .split('')
        .reverse()
        .join(''));

    return number === processed;
}

console.log(capicua(2002));