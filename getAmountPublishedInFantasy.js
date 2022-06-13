const writers = [
    { id: 1, name: "J. K. Rowling" },
    { id: 2, name: "Stephen King" },
    { id: 3, name: "Móra Ferenc" }
]

const books = [
    { writerId: 1, title: "...", type: "fantasy", numberOfWords: 100000 },
    { writerId: 1, title: "...", type: "thriller", numberOfWords: 200000 },
    { writerId: 1, title: "...", type: "fantasy", numberOfWords: 150000 },
    { writerId: 2, title: "...", type: "scifi", numberOfWords: 400000 },
    { writerId: 2, title: "...", type: "fantasy", numberOfWords: 300000 },
    { writerId: 3, title: "...", type: "fantasy", numberOfWords: 300000 },
    { writerId: 3, title: "...", type: "fantasy", numberOfWords: 300000 }
]

const getAmountPublishedInFantasy = (writers, books, nameOfWriter) => {
    let sumOfWords = 0;

    for (const book of books) {
        for (const writer of writers) {
            if (book.writerId === writer.id && nameOfWriter === writer.name && book.type === 'fantasy')
                sumOfWords = sumOfWords + book.numberOfWords
        }
    }

    return sumOfWords

}


console.log(getAmountPublishedInFantasy(writers, books, "Stephen King"))