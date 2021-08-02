/**given a number, return type of angle it is
 * angule(47) // return "acute angle"
 * angule(90) // return "right angle"
 */

function angle(number) {
    let result = "Complete angle";
    if (number < 90) {
        result = "Acute angle";
    } else if (number === 90) {
        result = "right angle";
    } else if (number > 90 && number < 180) {
        result = "obtuse angle";
    } else if (number === 180) {
        result = "plain angle";
    } else if (number > 180 && number < 360) {
        result = "concave angle";
    } else if (number > 360) {
        result = " wrong number entered: valid numbers are beteween 0 and 360";
    }
    return result;
}

console.log("The angle is: " + angle(70));