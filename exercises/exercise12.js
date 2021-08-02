/**given a number, show a desendent list from that number to 0 minus 8 on each time 
 * showing a header and a footer */

function list(number) {
    let result = `---A desendent list from ${number} to 0--- \n`;

    while (number > 0) {
        result += `-n°${number}\n`;
        number -= 8;
    }

    if (number <= 0) {
        result += "-n°0 \n";
    }
    result += "---END---";
    return result;
}

console.log(list(987));