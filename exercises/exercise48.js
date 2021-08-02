/**given a string, return which characters appears once and return thr first one */
function onlyOnce(text) {

    //define variables
    let counters = {};
    let result = [];
    let letters = text.split('').filter(letter => letter.trim().length >= 1);
    //get counters
    for (letter of letters) {
        if (!counters[letter]) {
            counters[letter] = 1;
        } else {
            counters[letter]++;
        }
    }

    //remove repeated letters
    for (letter in counters) {
        if (counters[letter] === 1) {
            result.push(letter);
        }
    }

    return [result, result[0]];
}
console.log(onlyOnce("hello everyone, this is oscar from secaida studio"));