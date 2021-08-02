function palindromo(text) {
    let inverse = text.split('').reverse().join('');
    return (inverse === text);
}
module.exports = palindromo;