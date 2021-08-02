/**given an array of numbers, return the lowest and the highest value */
function lowHigh(numbers) {
    let ordered = numbers.sort((a, b) => a - b);
    return {
        low: ordered[0],
        high: ordered[ordered.length - 1]
    }
}
console.log(lowHigh([1, 3, 5, 3, 2, 7, 5]));