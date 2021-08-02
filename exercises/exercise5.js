/*How much X% of X number is? 
example = how much is the 20% of 100? - return 20
*/

function percentage(percentage, number) {
    let operation = (number * (percentage / 100));
    let result = `The ${percentage}% of ${number} is: ${operation}`;
    console.log(result);
}
percentage(5, 1000);