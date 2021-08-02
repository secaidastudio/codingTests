/**given a text, check if it is a valid email 
 * 
 * ---use regular expressions
 */
function checkEmail(email) {
    return email_test = /^\w+@\w+\.\w+$/gi.test(email); //this is a regular expression

}

console.log(checkEmail("oscarpaiz79gmail.com"));