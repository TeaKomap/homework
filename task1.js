function getPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
  }
  const numbersArray = [-1, -2, 0, 4, -23, 45];
  console.log(getPositiveNumbers(numbersArray)); 