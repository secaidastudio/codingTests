/**given a string, uppercase if there are more uppercase letters 
 * or lowercase the string if there are more lowercase letters
 */

function conversion(text) {
    let upper = 0;
    let lower = 0;
    let result = "";
    for (let letter of text) {

        if (/[A-Z]/.test(letter)) {
            upper++;
        } else {
            lower++;
        }
    }
    if (upper > lower) {
        result = text.toUpperCase();
    } else {
        result = text.toLowerCase();
    }
    return result;
}

console.log(conversion("OSCar"));