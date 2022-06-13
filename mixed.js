"use strict";

console.log(1 == '1')
console.log(1 === '1')

// console.log(firstName)
// let firstName = 'John'


const clothes = ['jacket', 't-short']
clothes.length = 0;
console.log(clothes.length)


const flower = {
    englishName: "DogRose",
    latinName: "rosa ize",
    id: 212100,
    title: function () {
        return `${this.englishName} - ${this.latinName}`
    }
}

console.log(flower.title())


const parser = async (route) => {
    const res = await fetch(route);
    return res.json()
}


// const user = {
//     firstName: 'John',
//     lastName: "Doe",
//     speak: () => {
//         console.log(this)
//     }
// }
// console.log(user.speak())


// console.log(name);
// var name = "név"


// fnExpr();
// const fnExpr = () => {
//     console.log('fnxp')
// }

const person = {
    firstName: 'John',
    lastName: 'Doe'
};
person.firstName = 'jane'
console.log(person)


// console.log([NaN, null, undefined, '', 0, false, {}].filter(item => item))

const parsers = async (route) => {
    const res = await fetch(route);
    return res.json()
}
// console.log(parsers)

// obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3'
// }
// const keys = Object.keys(obj);
// for (let i = 0; i < keys.length; i += 1) {
//     console.log(keys[i])
// }

console.log(this)

const asd = () => {
    console.log(this)
}
asd();


async function parse(url) {
    const resp = await fetch(url);
}

let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(typeof (arr1 + arr2))
console.log(arr1 + arr2)

console.log(firstName)
var firstName = 'John'

const t = name => name.slice(3)
console.log(t("kari"))