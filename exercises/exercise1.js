/*Create a multiplication table */


function multiplicationtable(number) {
    var result = `# Table of ${number} # \n`;
    for (let i = 1; i <= 10; i++) {
        let multi = (i * number);
        result += (`${i} X ${number} = ${multi} \n`);
    }
    return result;
}

console.log(multiplicationtable(10));