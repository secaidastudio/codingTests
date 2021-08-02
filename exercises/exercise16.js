/**given a string, return the amount of vowels it contains 
 * createa function to receive string
 * match method with regular expression
 * return result
 */
function vowels(text) {
    let coincedences = text.match(/[a,e,i,o,u]/gi);
    return coincedences ? coincedences.length : 0; //This means (IF coincidences is true, return lenght, else return 0)
}
console.log("The number of vowels is: ", vowels("ppncl"));