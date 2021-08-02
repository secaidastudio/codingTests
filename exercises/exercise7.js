/*given a function with 2 values (start number and finish number return the amount of odd numbers */

function oddNumbers(start, end) {

    let counter = 0;
    for (let i = start; i < end; i++) {
        if (i % 2 !== 0) counter++;
    }
    return (`The amount of odd numbers between ${start} and ${end} is: ${counter}`);
}

console.log(oddNumbers(1, 100));