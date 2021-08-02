/** given 2 arrays, return an array with common elements between those */

function commonElements(array1, array2) {
    const filter = array1.filter(element => array2.includes(element));

    return filter;
}

console.log(commonElements(["oscar", "rolando", "paiz", "secaida"], ["oscar", "oscar", "paiz", "rasta"]));