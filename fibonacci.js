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

// Recursive approach

function fibsRec(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    let fibArr = [];
    fibArr = fibArr.concat(fibsRec(n - 1));
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }

  return fibArr;
}

fibArr = fibsRec(16);
console.log(fibArr);
