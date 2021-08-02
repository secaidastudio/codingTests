/**given a number, display a triangle with "*" */

function triangle(number) {
    let halfPoint = Math.floor(number - 1);
    let result = "";
    //loop for rows
    for (let row = 0; row < number; row++) {
        let level = "";

        //loop to draw * and spaces
        for (let column = 0; column < (2 * number - 1); column++) {
            //console.log(halfPoint - row, halfPoint + row);
            if (halfPoint - row <= column && halfPoint + row >= column) {
                level += "*";
            } else {
                level += " ";
            }

        }
        result += level + "\n";
    }
    return result;
}

console.log(triangle(5));