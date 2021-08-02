/**given a number show it fibonacci series */

function fibo(number) {
    let serie = [0, 1];
    for (let i = 2; i <= number; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return [serie, serie[number]];
}
console.log("Complete Fibonacci serie: ", fibo(10)[0]);
console.log("Fibonacci result: ", fibo(10)[1]);