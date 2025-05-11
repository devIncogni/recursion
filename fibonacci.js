// Iterative Approach

function fibs(n) {
  const fibArr = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      fibArr.push(i);
    } else {
      fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
  }

  return fibArr;
}

let fibArr = fibs(16);
console.log(fibArr);
