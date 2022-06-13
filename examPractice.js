const arr = ["korte", "alma", "ananasz"];
arr.splice(1, 0, 4);
console.log(arr);


//var, let, const
function hoist() {

    console.log(v1);
    var v1 = 1;
}
hoist();

console.log(typeof null);
console.log("1" === "1");
console.log(1 === 1);
console.log({} === {});
console.log([] === []);

/*
//Set timeout: 10, 40, 30, 20
console.log(10);

setTimeout(() => console.log(20), 1000);
setTimeout(() => console.log(30), 0);

console.log(40);
*/


//This, melyik mire mutat? - az objektumra mutat, az arrow function is. In a method, this refers to the owner object. Strict modeban, ha nem objketumra mutat; akkor undefined-ot fog adni
const obj1 = {
    key1: 'alma',
    meth1() {
        console.log(this);
        const afun = () => {
            console.log(this);
        };
        afun();
    }
};
obj1.meth1();


//Filterezze ki csak a valid értékeket
const arr2 = ["alma", 0, null, NaN, undefined, false, "korte", {}];
const filteredArr = arr2.filter(item => item);
console.log(filteredArr);


//0 üres tömböt ad vissza, leszabályozzuk
const arr3 = [12, 213, 43, 543, 2, 5];
// arr3.length = 0;
arr3.length = 1;
console.log(arr3);