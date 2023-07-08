// fibonacci series

// function fibonacci(n){

//     const fib = [0,1]
//     for(let i =2; i < n; i ++){
//         fib[i] = fib[i-1] + fib[i-2]
//     };
//     return fib;
// }
// console.log(fibonacci(1));
// console.log(fibonacci(3));
// console.log(fibonacci(7));

// 2. Factorial Number

// function factorial(n){
//   let result = 1;
//   for (let i = 2; i <=n; i ++){
//       result = result * i;
//   }
//   return result;

// }
//  console.log(factorial(4));
//  console.log(factorial(5));
//  console.log(factorial(7));

// Prime Number

// function primeNum(n) {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {  // more optimised loop by using Math.sqrt
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(primeNum(4));
// console.log(primeNum(5));

// Big-O = O(sqrt(n))


// Power of two

// Function to check if x is power of 2*/

// function isPowerOfTwo(n) {
//     if (n < 1)
//         return false;
//     while (n > 1) {
//         if (n % 2 != 0) {
//             return false;
//         }
//         n = n / 2;
//     }
//     return true;
// }
// console.log(isPowerOfTwo(32));

// // big-O = O(log)     // input reduce by half

// // 2nd method remaining 

//===========================================================================================

// program to display fibonacci sequence using recursion
function recursiveFibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {
        // console.log( recursiveFibonacci(num-1) ,  recursiveFibonacci(num-2) );
        return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
    }
}
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(8));

// O(n) - iterative
// O(2^n) - receursive

// program to display Recursive Factorial of a Number using recursion

function recursiveFactorial(num) {
    if (num === 0) {
        return 1;
    }
        return num * recursiveFactorial(num - 1);
}
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(2));
console.log(recursiveFactorial(3));
console.log(recursiveFactorial(8));
