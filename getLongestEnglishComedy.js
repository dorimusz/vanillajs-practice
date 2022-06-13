const movies = [
    {
        "title": "Titanic",
        "genre": "drama",
        "originalLanguage": "english",
        "length": 180
    },
    {
        "title": "Blabla",
        "genre": "adventure",
        "originalLanguage": "english",
        "length": 220
    },
    {
        "title": "Valami",
        "genre": "comedy",
        "originalLanguage": "english",
        "length": 80
    },
    {
        "title": "Valami2",
        "genre": "comedy",
        "originalLanguage": "english",
        "length": 120
    }
]

/*
const getLongestEnglishComedy = (movies) => {
    if (movies === []) {
        return null
    } else {
        let actualLongest = null;

        for (const movie of movies) {

            if (actualLongest === null && movie.genre === "comedy" && movie.originalLanguage === "english") {
                actualLongest = movie
            }
            // console.log(actualLongest)

            if (actualLongest != null && movie.length > actualLongest.length && movie.genre === "comedy" && movie.originalLanguage === "english") {
                actualLongest = movie;
            }
        }
        // console.log(actualLongest)

        if (actualLongest === null) return null
        const longest = actualLongest.title

        return longest
    }
}
*/


const getLongestEnglishComedy = (movies) => {
    let longest = 0;
    let movieName = null;

    for (let movie of movies) {
        if (movie.genre === "comedy" && movie.originalLanguage === "english" && movie.length > longest) {
            movieName = movie.title;
            longest = movie.length
        }
    }
    return movieName
}

/*
const getLongestEnglishComedy = (movies) =>
    movies.reduce((acc, curr) => (curr.length > acc.length && curr.originalLanguage === "english" && curr.genre === "comedy") ? curr : acc, { title: null, length: 0 }).title
*/
console.log(getLongestEnglishComedy(movies))