const users = [
    {
        id: 3242342,
        username: "belakovacs12",
        email: "bela@gmail.com",
        phone: "701231231",
        isConfirmed: true
    },
    {
        id: 2136523,
        username: "lajosnagy",
        email: "lajos@gmail.com",
        phone: "303214321",
        isConfirmed: true
    },
    {
        id: 8743534,
        username: "akarki99",
        email: "kazmer@gmail.com",
        phone: "206546547",
        isConfirmed: false
    }
]

function getUserIdentifiers(users) {
    console.log(users);
    const result = [];

    if (users === []) return []
    else {
        for (const user of users) {
            let identity = user.username + "@" + user.id;
            result.push(identity)
        }
        return result
    }
}

console.log(getUserIdentifiers(users));