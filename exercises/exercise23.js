/**given a string, change to capital letter the first letter of each word and return the string 
 * 
 * create a function with string paramenter
 * capitalize the first letter of the string
 * loop the string
 * if the previous character to the actual letter is an space, capitalize it
 * if the character is not a space, add it to the result
 */
function capitalize(text) {
    let result = "";

    for (let letter in text) {
        if (text[letter - 1] === " " || parseInt(letter) === 0) {
            result += text[letter].toUpperCase();
        } else {
            result += text[letter];
        }
    }
    return result;
}
console.log(capitalize("roly paiz secaida"));