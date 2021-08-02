/**given an array of objects, return whcih hobbies are the most common between users */
const users = [{
        name: "Oscar",
        hobbies: ["coding", "movies", "gaming"]
    },
    {
        name: "Rolando",
        hobbies: ["cooking", "movies", "gym"]
    },
    {
        name: "Rolly",
        hobbies: ["coding", "swiming", "cycling"]
    },
    {
        name: "humberto",
        hobbies: ["reading", "movies", "gaming"]
    }
]

function hobbies(arrObj) {
    let map = {};
    for (object of arrObj) {
        for (hobbie of object.hobbies) {
            if (!map[hobbie]) {
                map[hobbie] = 1;
            } else {
                map[hobbie]++;
            }
        }
    }

    return map;
}

console.log(hobbies(users));