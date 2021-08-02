/**given an array of number, return its average */

function average(numbers) {
    let sum = numbers.reduce((accValue, actualNumber) => {
        return accValue + actualNumber;
    });

    let theAverage = sum / numbers.length;

    return theAverage;
}

console.log(average([1, 2, 3, 4, 5, 6]));