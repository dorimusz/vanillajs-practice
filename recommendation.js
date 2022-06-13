user = {
  "id": 1,
  "username": "Kovacs Bela",
  "mostRecentPurchase": {
    "category": "shoes",
    "color": "blue",
    "price": 300
  },
}

product = {
  "category": "accessory",
  "color": "red",
  "price": 100
}

//   console.log(user.mostRecentPurchase);
//   console.log(user.mostRecentPurchase.category);
//   console.log(product.category);

function isGoodRecommendation(user, product) {
  let res = {};
  if (product.category != user.mostRecentPurchase.category && product.color === user.mostRecentPurchase.color && product.price < user.mostRecentPurchase.price) {
    res = {
      customerName: user.username,
      productColor: product.color,
      isProductRecommended: true
    };
  } else {
    res = {
      customerName: user.username,
      productColor: product.color,
      isProductRecommended: false
    };
  }

  return res;
}