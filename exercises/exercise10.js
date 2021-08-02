/**Given a number, draw a stairs with number amount of steps */



function drawSteps(number) {

    let fullSteps = "";
    for (let level = 1; level <= number; level++) {
        let steps = "";
        for (let step = 1; step <= level; step++) {
            steps += "[-]";
        }

        fullSteps += steps + '\n';
    }

    return fullSteps;
}

console.log(drawSteps(10));