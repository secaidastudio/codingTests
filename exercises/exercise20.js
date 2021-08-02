/**given 2 strings, return true if both are anagrams (same letters and same amount of letters) and false
 * if they aren not
 * 
 * how to resolve it:
 * -create a function to clean both strings
 * -lower case them
 * -create an array of letters
 * -orden them
 * -join them
 * -a second function to compare the 2 strings
 */
function cleanText(text) {
    return text
        .replace(/[^\w]/gi, '') //this will remove everything that is not a letter globally in the string no matter if it is lower or uppercase
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

function anagram(text1, text2) {
    //long way
    /*if (cleanText(text1) === cleanText(text2)) {
        return true;
    } else {
        return false;
    }*/
    //end of long way
    return cleanText(text1) === cleanText(text2);
}
console.log(anagram("oscar", "racso"));