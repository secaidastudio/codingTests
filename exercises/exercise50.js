/**given a number, return how many "loops" contains
 * for this exercise, a loop is how many circles a number has when you draw it
 * 1 = doesn't have a loop
 * 8 has 2 loops
 * 9 has 1 loop
 * 
 * loops(28861);
 * 
 * //returns 5
 * 
 * numbers cotaining loops : 0, 6, 8, 9
 */

function loops(number) {
    let arrayNumbers = number.toString().split('');
    let loops = 0;
    for (number of arrayNumbers) {
        number = parseInt(number);
        if (number === 0 || number === 6 || number === 9) {
            loops++;
        } else if (number === 8) {
            loops += 2;
        }
    }

    return loops;
}
console.log(loops(28861));