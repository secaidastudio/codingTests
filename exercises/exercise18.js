/**given a number, r eturn all of its dividers
 * showDividers(5)
 * return 
 * 1
 * 5
 * 
 * how to resolve it:
 * 
 * create a function to check if a number is divider by other
 * create a function to go through the loop and show it
 */

function divider(number, possible_divider) {
    if (number % possible_divider === 0) {
        return possible_divider;
    }
    return 0;
}

function showDividers(number) {
    for (let i = 1; i <= number; i++) {
        let isDivider = divider(number, i);

        if (isDivider) console.log(isDivider);
    }
}

showDividers(50);