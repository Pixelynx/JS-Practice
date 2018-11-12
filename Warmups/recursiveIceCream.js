const iceCreamShop = (arr, fav) => {
  if (arr.length < 1) {
    return false;
  } else {
      let iceCream = arr.shift();
      if (iceCream === fav) {
        return true;
      }
      return iceCreamShop(arr, fav);
    }
  }

// console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'));

// let arr = ['vanilla', 'strawberry'];
// console.log(arr.shift())

// ice_cream_shop(['vanilla', 'strawberry'], 'blue moon')  # => returns false
// ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')  # => returns true
// ice_cream_shop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')  # => returns false
// ice_cream_shop(['moose tracks'], 'moose tracks')  # => returns true
// ice_cream_shop([], 'honey lavender')  # => returns false
