/*reverse numbers : reverseNumber(67) // returns 76 */
//easy way
function reverseNumber(number) {
    let sNumber = number.toString();
    let reverse = sNumber.split('').reverse().join('');
    let reverseConverted = parseInt(reverse, 10) * Math.sign(number); //<--this convert a string into a integer
    return reverseConverted;
}
//end of the easy way

function reverseNumberTwo(number) {
    let sNumber = number.toString();
    let reverseTwo = "";
    for (let digit of sNumber) {
        reverseTwo = digit + reverseTwo;
    }
    let reverseTwoConverted = parseInt(reverseTwo, 10) * Math.sign(number);
    return reverseTwoConverted;
}
console.log(reverseNumber(-20));
console.log(reverseNumberTwo(-20));