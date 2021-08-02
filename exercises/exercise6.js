/**Draw an empty square with "*" 
 * example: function square(4) will show
 *    ****
 *    *  *
 *    *  *
 *    ****
 */
function side(number) {
    let side = "";
    for (let i = 0; i < number; i++) {
        side += "*";
    }

    return side;
}

function square(number) {
    //upper side
    let draw = side(number) + "\n";
    //end of upper side


    let content = "";
    //creating rows
    for (let i = 0; i < (number - 2); i++) {;
        content = "*";
        //creating empty spaces
        for (x = 0; x < (number - 2); x++) {
            content += " ";
        }
        content += "*";
        //adding a row
        draw += content + "\n";

    }
    //bottom side
    draw += (side(number));
    //end of bottom side

    return draw;
}

console.log(square(8));