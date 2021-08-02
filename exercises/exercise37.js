/**given an array of numbers or a text, return the number or words more frequent */

function recurrentElements(text) {
    let mapping = {},
        more_frequent = "",
        frequent_value = 0;
    if (typeof text === "string") {
        text = text.split(" ");
    }
    for (let element of text) {
        if (mapping[element]) {
            mapping[element]++;
        } else {
            mapping[element] = 1;
        }

    }
    for (let element in mapping) {
        if (mapping[element] > frequent_value) {
            frequent_value = mapping[element];
            more_frequent = element;
        }
    }

    return {
        "more_frequent": more_frequent,
        "frequent_value ": frequent_value
    };
}
console.log(recurrentElements("hola oscar oscar paiz paiz paiz"));
console.log(recurrentElements([1, 2, 2, 2, 2, 4, 5, 6]));