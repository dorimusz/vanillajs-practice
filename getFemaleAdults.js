function getFemaleAdults(users) {
    // console.log(users);
    // const result = [];

    if (users === []) {
        return []
    } else {
        for (const user of users) {
            // console.log(user.gender);
            if (user.gender === "female" && user.age >= 18) {
                const obj = user;
                console.log(obj);
                // console.log(obj.id);
                // res.push(obj);
            }
            return "a"
        }
    }
}


let users = [
    {
        id: 4733632,
        username: "akarkine99",
        email: "ifjkazmerne@gmail.com",
        phone: "206546547",
        gender: "female",
        age: 17,
        isConfirmed: false
    },
    {
        id: 2136523,
        username: "lajosnenagy",
        email: "lajosne@gmail.com",
        phone: "303214321",
        gender: "female",
        age: 18,
        isConfirmed: true
    },
    {
        id: 4733631,
        username: "akarkine99",
        email: "kazmerne@gmail.com",
        phone: "206546547",
        gender: "female",
        age: 20,
        isConfirmed: false
    }
];
console.log(users);

console.log(getFemaleAdults(users));