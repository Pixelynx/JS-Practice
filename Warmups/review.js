const filterEvens = (arr) => {
  return arr.filter(el => el % 2 === 0);
}


//arr is [12, 2, 3, 4, 5, 6]; return [12, 4, 6]
const reduceEvens = (arr) => {
  return arr.reduce((acc, currEl) => {
    if (currEl % 2 === 0) {
      acc.push(currEl)
    }
    return acc
  }, [])
}

console.log(reduceEvens([12, 2, 3, 4, 5, 6]))
