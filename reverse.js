
const revString = (str) => {
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed
}

const str = 'hello'
console.log(str.split('').reverse().join(''))


console.log(revString('hello'))