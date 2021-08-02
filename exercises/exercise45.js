/**given an array of students (name and grade), return how many are suspended and how many
 * approved
 */

function approved(students) {
    let approved = 0,
        suspended = 0;
    for (student of students) {
        if (student[1] > 51) {
            approved++;
        } else {
            suspended++;
        }
    }

    return (`Approved: ${approved}, suspended: ${suspended}`);
}

console.log(approved([
    ["Oscar", 100],
    ["Roly", 90],
    ["Paicito", 50],
    ["Secaidin", 40]
]));