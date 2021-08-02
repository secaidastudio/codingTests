/**given an array of numbers, return the array with their numbers squared
 * squared([1,2,3]) // return [1,2,9]
 */

function square(array_numbers) {
    let result = [];

    let squaredNumber = array_numbers
        .filter(number => typeof number === "number")
        .map(number => Math.pow(number, 2));

    return squaredNumber;
}
console.log(square([1, 2, 3]));