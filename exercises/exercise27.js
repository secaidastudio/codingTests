/**given a number , return how many years, months and days equals to
 * 
 * calcDays(920);
 * 
 * return 2 years, 6 months and 10 days
 */

function calcDays(days) {
    let years = Math.floor(days / 365);
    let remaining_days = (days % 365);
    let months = Math.floor(remaining_days / 30);
    remaining_days = remaining_days % 30;

    return `${days} equals to ${years} years, ${months} months and ${remaining_days} days.`
}

console.log(calcDays(9200));