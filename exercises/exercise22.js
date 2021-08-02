/**given 2 numbers, show which is grater than the other */

function compare(number1, number2) {
    let result = "";
    if (number1 == number2) {
        result = "same numbers"
    } else if (number1 > number2) {
        result = "The grather number is: " + number1 + "\n";
        result += "The lower number is: " + number2;
    } else if (number2 > number1) {
        result = "The grather number is: " + number2 + "\n";
        result += "The lower number is: " + number1;
    } else { result = "enter correct numbers"; }


    return result;
}
console.log(compare("fdfd", 21));