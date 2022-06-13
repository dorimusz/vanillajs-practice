const person = {
    firstName: 'John',
    lastName: 'Doe'
};

// person = {
//     firstName: 'Jane',
//     lastName: 'Doe'
// };

console.log(person);


// const arr = [435, 567, 8, 435, 345, 677];
// //console.log(arr.splice(0, 0, 0));
// const asd = arr.splice(0, 0, 0);
// console.log(arr);
// // console.log(asd);

const arr = [435, 567, 8, 435, 345, 677];
arr.splice(0, 0, 0);
console.log(arr);

function restParameter(a, ...b) {
    console.log(b[2]);
}
restParameter(1, 2, true, ['Joe', 'gary'], false);


const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes.length);