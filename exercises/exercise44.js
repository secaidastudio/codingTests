/**given an array of string, return another array with the values that contains more than 
 * 2 words
 * 
 * twoWords(["hola","oscar paiz","que tal","yo"]);
 * 
 * return ["oscar paiz","que tal"]
 */

function twoWords(text) {
    let new_elements = [];
    for (let word of text) {
        if (word.split(' ').length >= 2) {
            new_elements.push(word);
        }
    }
    return new_elements;
}

console.log(twoWords(["hola que tal estas", "oscar paiz", "que tal", "yo"]));