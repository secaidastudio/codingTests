/**given an array of numbers and a X number, return true  if the array contains the x amount of numbers
 * in order and false if it doesn't
 * 
 * array([1,2,3,4], 4) return true
 * array([1,2,3,5], 4) return false
 */
function sequence(array_numbers, number) {
    for (let i = 0; i < number; i++) {
        if (array_numbers.indexOf(i + 1) < 0) {
            return false;
        }

    }

    return true;
}
console.log(sequence([1, 2, 3, 5], 4));