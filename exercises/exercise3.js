/*Find a word in a phrase and count how many times it shows */

function findWord(text, search) {
    let lowerText = text.toLowerCase().replace(/[!¡.,-]/gi, '');
    //THIS IS MY ALTERNATIVE (add the .split(' '); at the end of the above line)
    /*let counter = 0;
    for (let i = 0; i < lowerText.length; i++) {

        //console.log(lowerText[i]);
        if (lowerText[i] == search) {
            counter++;
        }

    }
    console.log(`The word ${search} appears ${counter} times`);
    //END OF MY ALTERNATIVE*/
    let result = 0;
    if (lowerText.includes(search)) {
        let words = lowerText.split(" ");
        let map = {};
        for (let word of words) {
            if (map[word]) {
                map[word]++;
            } else {
                map[word] = 1;
            }
        }
        result = map[search];
    } else {
        result = 0;
    }
    return result;

}
console.log("Number of coincidences in the phrase: ", findWord("Hola, oscar Oscar Oscar", "hola"));