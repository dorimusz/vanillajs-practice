
const revString = (str) => {
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed
}

console.log(revString('hello'))