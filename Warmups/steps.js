const steps = (n) => {
  if (n < 3) {
    return n;
  }
  return steps(n - 1) + steps(n - 2);
}

console.log(steps(8));
