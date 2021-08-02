/**given a string, return the most repeated character/letter
 * 
 * example: "banana" returns "a"
 * 
 * hoe to resolve it:
 * -make a function which receives a text
 * -map each letter in a JSON
 * -itinerate the map
 * -make a condition to see if counter is greater
 */

function mostUsed(text) {
    let mapLetter = {};
    let max_rep = 0;
    let mostRepeatedLetter = "";
    for (let letter of text) {
        if (!mapLetter[letter]) {
            mapLetter[letter] = 1;
        } else {
            mapLetter[letter]++;
        }
    }

    for (let letter in mapLetter) {
        if (mapLetter[letter].toString().trim().length === 1 && mapLetter[letter] > max_rep) {
            max_rep = mapLetter[letter];
            mostRepeatedLetter = letter;
        }
    }
    console.log("The most repeated letter is: ", mostRepeatedLetter);
}
mostUsed("a e i  o   u u  ");