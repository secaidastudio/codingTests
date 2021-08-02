/**given an array of number, return the array without duplicates and remove any string that may contain
 * 
 * removeDup([1,1,1,1,2,3,4]); // return [1,2,3,4]
 */

function removeDup(elements) {
    elements = elements.filter(element => {
        return typeof element === "number";
    });
    let set_noDups = new Set(elements);
    return Array.from(set_noDups);
}

console.log(removeDup(["one", "two", 1, 1, 1, 1, 2, 3, 4, 4, 5, 6, 7, 7, 8]));