/*
The arr.splice() method is an inbuilt method in JavaScript which is used to modify the contents of an array by removing the existing elements and/or by adding new elements.

Array.splice( index, remove_count, item_list )

Parameter: This method accepts many parameters some of them are described below: 
    index: It is a required parameter. This parameter is the index which start modifying the array (with origin at 0). This can be negative also, which begins after that many elements counting from the end.
    remove_count: The number of elements to be removed from the starting index.
    items_list: The list of new items separated by comma operator that is to be inserted from the starting index.

Syntax
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
*/

let webDvlop = ["HTML", "CSS", "JS", "Bootstrap"];
console.log(webDvlop);

webDvlop.splice(2, 1, 'Php', 'React_Native');
console.log(webDvlop);

webDvlop.splice(-2, 0, 'React');
console.log(webDvlop);


let languages = ['C++', 'Java', 'Html', 'Python', 'C'];
//Add Juila and Php after removing Html
let removed = languages.splice(2, 1, 'Julia', 'Php')
console.log(languages);
console.log(removed);
//No removing, only insertion from 2nd index from the ending
languages.splice(-2, 0, 'Pascal')
console.log(languages);


const months = ['Jan', 'March', 'April', 'June'];
// insert at index 1
months.splice(1, 0, 'Feb');
console.log(months);
// replace 1 element at index 4
months.splice(4, 1, 'May')
console.log(months);

