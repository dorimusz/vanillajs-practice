/*
A function which gets a sentence as parameter, writes the senctence 5 times. There's one more exclamation mark with each time and the sentences are tied as a string.
*/


let sentence = "Imádom a JSt";

function amplifyBs(str) {

    let array = []; //vagy maradhat string, és akkor simán +=
    for (let i = 0; i < 5; i++) {
        array.push(str);
        array.push('!'.repeat(i + 1));
    }

    //console.log(array);
    return array.join('');

}

console.log(amplifyBs(sentence));

// for (let counter = 1; counter <= 5; counter++) {
//     console.log(sentence)
// }



// for (let counter = 1; counter <= 5; counter++) {
    //     sentence + '!'
    // }


  // for (let counter = 1; counter <= 5; counter++) {
    //     let newArray = [...array];
    //     let bactToString = newArray.toString();
    //     console.log(bactToString);
    // }
    //     return bactToString;