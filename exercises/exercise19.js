/**given an array of objects 'movies' and show which ones did you already watch and which don't */
function myMovies(movies) {
    for (let movie of movies) {
        let toShow = `"${movie.title}" from "${movie.director}"`;
        if (movie.viewed) {
            console.log("You already watched: ", toShow);
        } else {
            console.log("You haven't seen this move: ", toShow);
        }
    }
    return movies;
}


const movies_collection = [{
        title: "Lord of the rings",
        director: "peter Jackson",
        viewed: true
    },
    {
        title: "Batman",
        director: "tim burton",
        viewed: true
    },
    {
        title: "Casablanca",
        director: "sepa",
        viewed: false
    },
    {
        title: "Nomadland",
        director: "Xian Xi Pi",
        viewed: false
    }
];

console.log(myMovies(movies_collection));