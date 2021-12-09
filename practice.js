//Add value to array
function addToArray(array, value) {
  array.push(value);
  return array;
}; 



//Add multiple values to array
function addValuesToArray(array, values) {
    array.push(...values);
    return array;
}



//The product is a good promo for the customer, based on last purchase details.
const user = {
    "id": 1,
    "username": "Alan",
    "mostRecentPurchase": {
      "category": "hat",
      "color": "yellow",
      "price": 700
    },
};

const product = {
    "category": "belt",
    "color": "orange",
    "price": 250
};

console.log(product.category);
console.log(user.mostRecentPurchase.category);

function isGoodRecommendation(user, product) {
    if (product.category != user.mostRecentPurchase.category && product.price < user.mostRecentPurchase.price && product.color === user.mostRecentPurchase.color) {
        return true;
    } else {
        return false;
    };
}   
isGoodRecommendation(user, product);
console.log(isGoodRecommendation(user, product));



//Reverse a string
function reverse(str) {
    const splitIntoArray = str.split("");
    const reverseArray = splitIntoArray.reverse();
    const makeStringAgain = reverseArray.join("");
    return makeStringAgain;
}

console.log(reverse('kiskutya'));