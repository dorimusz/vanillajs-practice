// for (let i = 0; i <= 10; i++) {
//     console.log("clap")
// }

let total = 0;
for (let num = 0; num < 11; num++) {
    total = total + num
}
console.log("the total is: " + total)

//loop through an array
const fruits = ['apple', 'banana', 'orange', 'pineapple', 'strawberry']
for (let i = 0; i < 3; i++) {
    console.log(fruits[i])
}

//loop through an object, because objects don't have indexes
const person = { name: 'John', age: 30, maritalStatus: true }
const arr = [3, 5, 7]
arr.foo = 'hello'
// console.log("simple: " + person['maritalStatus'])

// for (let info in person) {
//     console.log(info, person[info]) //access to each value
// }

//for of - property of an object


//for in - property name of an object
let text = '';
for (let x in person) {
    text += person[x]
    console.log(x)
}

console.log("text " + text)

for (let i in arr) {
    console.log(i)
}

//for od -value of an array
for (let i of arr) {
    console.log(i)
}

/*
1. for (every prop in objects) { // do this }      *objects - enumerable*
2. for (every item of array) { // do this }          *arrays - iterable*
*/