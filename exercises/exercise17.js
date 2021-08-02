/**given a number, show the numbers from 1 to the number, but for multiples of 3
 * replace it with "Buzz" and for the multiples of 5, replace it with "Lightyear",
 * and for the multiples of 3 AND 5, replace with "BuzzLightyear"
 * 
 * How to do it:
 * --create a function that receives the number,
 * --a method that evaluates if it is multiple of 3 or 5
 * --a function to itinerate and show
 * --loop from 1 to number
 */
function buzz(number) {
    let result = "";
    if (number % 3 === 0 && number % 5 === 0) {
        result = "BuzzLightyear";
    } else if (number % 3 === 0) {
        result = "Buzz";
    } else if (number % 5 === 0) {
        result = "Lightyear";
    } else {
        return number;
    }
    return result;
}

function print(number) {
    for (let i = 1; i <= number; i++) {
        console.log(buzz(i));

    }
}
print(50);