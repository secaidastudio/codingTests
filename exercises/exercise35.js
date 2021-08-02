/**given an array, create another with the first and last item of the previous array */

function firstAndLast(elements) {
    let newelements = [];
    newelements.push(elements[0], elements[elements.length - 1]);

    return newelements;
}

console.log(firstAndLast([10, 20, 30, 40]));