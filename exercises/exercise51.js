/**given an array, return an array with even numbers and another array with odd numbers */

//the long way
function evenAndOdd(arrayNumbers) {


    let evenResult = [];
    let oddresut = [];
    for (number of arrayNumbers) {
        if (number % 2 == 0) {
            evenResult.push(number);
        } else {
            oddresut.push(number);
        }
    }
    return (`Even numbers ${evenResult}, Odd numbers ${oddresut}`);


}
//end of the long way

//the easy way
function oddAndEven(arrayNumbers) {
    return {
        even: arrayNumbers.filter(num => num % 2 === 0),
        odd: arrayNumbers.filter(num => num % 2 !== 0)
    }
}
//end of the easy way
console.log(evenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(oddAndEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));