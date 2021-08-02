/* Palindromo
 -return TRUE if it is a palindromo
 -return FALSE if it is not*/
function palindromo(text) {
    let inverse = text.split('').reverse().join('');
    return (inverse === text);
}

console.log("It is a palindromo? " + palindromo("loco"));