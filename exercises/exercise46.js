/** given a string, return all possibles sub strings
 * 
 * allSubStrings("hola");
 * 
 * returns [
 * "h","o","l","a",
 * "ho","ol","la","hol",
 * "ola","hola"
 * ]
 */
function allSubStrings(text) {
    let subStrings = [];

    for (letter in text) {

        let start = parseInt(letter);

        for (let i = 0; i <= text.length - start; i++) {
            let finish = parseInt(i) + parseInt(start);

            subStrings.push(text.substring(start, finish));

        }
    }

    return subStrings.filter(element => element.length >= 1);

}

console.log(allSubStrings("hola"));