transactions = [
    { user: { name: "Kovács Béla", age: 16 }, type: "deposit", amount: 3500, currency: "HUF" },
    { user: { name: "Varga Lajos", age: 28 }, type: "withdraw", amount: 4500, currency: "HUF" },
    { user: { name: "Nagy Kázmér", age: 18 }, type: "withdraw", amount: 4500, currency: "HUF" },
]

const sumOfWithdrawalsByTeenagers = (transactions) => {
    let whithrawed = 0;

    for (let person of transactions) {
        console.log(person.user.age)
        if (person.user.age < 20 && person.type === "withdraw") {
            whithrawed = whithrawed + person.amount
        }
    }
    return whithrawed
}

console.log(sumOfWithdrawalsByTeenagers(transactions))