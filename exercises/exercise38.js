/**given a number, show a list of the square natural numbers until reaching the number */
function square(number) {
    return number * number;
}

function show(number) {
    for (let i = 0; i <= number; i++) {
        console.log(square(i));

    }
}
show(5);