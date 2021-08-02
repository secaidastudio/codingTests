/**ginven an array, divide it in sub arrays as needed based on the primary array size number
 * dive the array in X elements
 * example: anArray([1,2,3,4],2)
 * returns [[1,2],[3,4]]
 * 
 * 
 * how to resolve it: 
 * -create a function which receives the array and the number
 * -create an array
 * -itinerate the array and add the sub arrays 
 */


function subArray(main_array, number) {
    let arrays = [];
    for (let element of main_array) {
        let last = arrays[arrays.length - 1];
        if (!last || last.length === number) {
            arrays.push([element]);
        } else {
            last.push(element);
        }

    }
    return arrays;
}

console.log(subArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));