//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//Filterezd ki a 6-nál több karakterből álló szavakat
const result = words.filter(word => word.length > 6);
console.log(result);

//Filterezze ki a valid értékeket
const mixed = ["alma", 0, null, NaN, undefined, false, "korte", {}];
const valid = mixed.filter(item => item);
console.log(valid);



//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

/*
map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
map() does not change the original array.
*/


const numbers = [1, 4, 9, 16];
const doubledWithMap = numbers.map(number => number * 2);
console.log(doubledWithMap);

let doubles = numbers.map(function (num) {
    return num * 2
});
console.log(doubles);


//Return a new array with the square root of all element values:
let numbers2 = [1, 4, 9];
let roots = numbers2.map(function (number) {
    return Math.sqrt(number)
});
console.log(roots);


const numbers3 = [4, 9, 16, 25];
const newArr = numbers3.map(Math.sqrt)
console.log(newArr);