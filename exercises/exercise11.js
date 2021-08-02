/**giving a text and a search word, censure all matches with the text [-CENSORED-] if the text and search
 * are empty, return "you can't read text and search" in case both parameters aren't comming
 */
function censuredText(text = false, search = false) {
    let result = "";
    if (!text && !search) {
        result = "You can't read the text and the search";
    } else if (!text && search) {
        result = "There is no text to search";
    } else if (text && !search) {
        result = "There is no search";
    } else if (text && search) {
        result = text.replace(new RegExp(search, 'gi'), "[-CENSORED-]");
    }

    return result;
}

console.log(censuredText("hola hola oscar hola", "hola"));