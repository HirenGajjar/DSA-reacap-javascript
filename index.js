/*
1. Sum of first N natural numbers
*/

// const sumOfNaturalNumbers = (n) => {
//   if (n < 0) {
//     return "number is negative";
//   } else {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     return sum;
//   }
// };

// console.log(sumOfNaturalNumbers(10));

// const sumOfNaturalNumbers2 = (n) => {
//   if (n < 0) {
//     return "Number is negative";
//   } else {
//     return (n * (n + 1)) / 2;
//   }
// };

// console.log(sumOfNaturalNumbers2(10));

/*
2. Find the sum of the digits of the number
*/

const sumOfDigits = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};

console.log(sumOfDigits(123));
