const recursiveEvens = (num) => {
  if (num < 0) {
    num = num * -1;
  }

  if (num === 1) {
    return false;
  } else if (num === 0) {
    return true;
  } else {
    return recursiveEvens(num - 2);
  }
}

console.log(recursiveEvens(13));
