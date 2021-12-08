//Feladat: 

const array1 = ['apple', 'pear', 'pumpkin'];
const array2 = ['apple2', 'pear2', 'pumpkin2'];

function addValueToTheEndOfArray(arr, val) {
    arr.push(val);
    return arr;
    //return "alma", "körte";
};
//addValueToTheEndOfArray(array, 'orange');
//console.log(addValueToTheEndOfArray(['apple', 'pear', 'pumpkin'], 'lemon'));



//Új tömböt hozzon létre
//Azonos az értékük, de nincsenek összelinkelve. az 'a' nem hat a 'b'-re és a 'b' az 'a'-ra:
let a = 1;
let b = a;
a = 2;
b = 5;
//console.log(a, " ", b);

//de ez a tömbök, objektumok esetében más, ugyan azokon az értéken és értékhelyeken osztoznak a memórián, tehát felülírják egymást:
let c = {
    key: "value",
    key2: {
        subkey: "value3"
    }
};
let e = {
    key: "value"
};

//let d = c; //olyan, mint egy parancsikon, ami a c-re mutat
// let d = {...c}; //másolt bele a c tartalmát(kulcs-érték párjait) ebbe az új objektumba másold bele - SHALLOW COPY
// let d = Object.assign({}, c); //target uj object SHALLOW COPY
//let d = JSON.parse(JSON.stringify(c));

let convertCtoString = JSON.stringify(c);
let d = JSON.parse(convertCtoString);
console.log("d típusa: ", typeof d);
console.log("d típusa: ", typeof c);
console.log("convertCtoString: ", typeof convertCtoString);

// c.key = "value1";
// c.key2.subkey = 'value4'; //a begyázott objektum összelinkelődött, csak a legfelső szint másolódik át, a többi parancsikon marad
// d.key = "value2";
// d.key2.subkey = 'value5'; //a begyázott objektum összelinkelődött, csak a legfelső szint másolódik át, a többi parancsikon marad
// console.log(c, " ", d);
// console.log(c === d);
//console.log({} === {});//nem ugyan arra a memóriára mutat
// console.log(c === e);
// console.log(c.key === e.key); //ezek stringek
// //console.log('alma' === 'alma');
// console.log("value" === "value");


//Töltsük fel a régi arrayjel és az új valueval is:
function createNewArrayWithValue(arr, val) {
    const newArray = [...arr, val];

    /*
    const newArray = JSON.parse(JSON.stringify(arr)); //deep copy esetén
    newArray.push(val);
    */

    return newArray;
}
console.log(createNewArrayWithValue(array1, 'lemon'));


//Tömbök összeadása
function addArrayToArray (arr1, arr2) {
    /*
    for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i]);
    }
    return arr2;
    */

    /*
    for (const item of arr1) {
        arr2.push(item);
    }
    return arr2;
    */
    return arr1.concat(arr2); //eredeti arrayek maradnak
    
}
console.log(addArrayToArray(array1, array2));
console.log(array1, " ", array2)