/**given an object, check if a dedicated property exists
 * 
 * propertyExists(myObject, "name");
 * 
 * //return: true
 */

function propertyExists(myObject, property) {
    if (typeof myObject === 'object' &&
        typeof property === "string" &&
        myObject.hasOwnProperty(property)
    ) {
        return true;
    }
    return false;
}
let user = { name: "Oscar", surname: "Rolando", lastname: "Paiz" }
console.log(propertyExists(user, "email"));