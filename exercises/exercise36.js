/**given a string, return how many vocals and consonants has */

function vocalsAndConsonants(text) {
    let consonants = 0;
    let vocals = 0;
    let cleanText = "";

    cleanText = text.split("")
        .filter(letter => /[áéíóú\w]/gi
            .test(letter) && isNaN(letter))
        .join("");

    for (letter of cleanText) {
        if (/[áéíóúaeiou]/ig.test(letter)) {
            vocals++;
        } else {
            consonants++;
        }
    }
    console.log("Number of vocals: " + vocals);
    console.log("Number of consonants: " + consonants);
}

vocalsAndConsonants("mama");