class Movie {
    constructor(title, stars, ageRating) {
        this.title = title
        this.stars = stars
        this.ageRating = ageRating
    }
}

const m1 = new Movie("Family Guy", 4.2, 18)
const m2 = new Movie("Tom & Jerry", 4.1, null)
const m3 = new Movie("Star Wars 9", 3.3, null)
const m4 = new Movie("Pulp fiction", 5.0, 18)

class MovieFinder {
    constructor() {
        this.recommendedMovies = [];
    }

    //osztályszintű metódus statickal
    static isRecommendedChildren(movie) {
        return (movie.stars >= 4 && movie.ageRating === null) //az if elágazás kihagyva, mert ez is truera vagy falsera értékelődik ki
    }

    //példányszintű stativ nélkül
    register(movies) {
        let
        for (const movie of movies) {
            //mivel static, kell elé a movieFinder
            if (MovieFinder.isRecommendedChildren(movie)) {
                this.recommendedMovies.push(movie)
            }
        }
    }
}

// console.log(MovieFinder.isRecommendForChildren(m1))
// console.log(m2.isRecommendForChildren())
console.log(MovieFinder.register([m1, m2, m3, m4]))



/* 
// OLD VERSION: 
class MovieFinder extends Movie {
    isRecommendForChildren(movie) {
        if (movie.stars >= 4 && movie.ageRating === null) return true
        else return false
    }

    static register(movies) {
        let recomenndedMovies = [];

        for (const movie of movies) {
            let recommendedForChildren = movie.isRecommendForChildren();
            if (recommendedForChildren) {
                recomenndedMovies.push(movie.title)
            }
        }
        return recomenndedMovies;
    }
}
*/