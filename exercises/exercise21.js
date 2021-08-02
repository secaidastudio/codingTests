/**given a string and a X number, return the first X letters of that string
 * 
 * create a function with the string and the number
 * check data are correct
 * loop the string with substr function
 * return result
 */

function cut(text, until) {
    let result = "";
    if (typeof text === 'string' && typeof until === 'number') {
        result = text.substring(0, until);
    } else {
        result = "Enter correct data";
    }
    return result;
}

console.log(cut("Hola que tal estas", 8));