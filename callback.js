
// Program for using Callback

// function getDataFromServer(personalDetails){
// console.log("1st function");
// return personalDetails();
// }

// function personalDetails(){
//   console.log("Personal details are available to use");
// }
// getDataFromServer(personalDetails);


// function getDataFromServer(callback){
// console.log("1st function");
//   return callback();
//   }


//   function personalDetails(){
//     console.log("Personal details are available to use");
//   }
//   getDataFromServer(personalDetails);


// function getDataFromServer(personalDetails) {
//   console.log("first execute all its operation")
//   setTimeout(() => {
//     personalDetails();
//   }, 5000)
// }
// function personalDetails() {
//   console.log("Personal details are available to use");
// }
// getDataFromServer(personalDetails);


// function getDataFromServer(callback) {
//     console.log("1st function");
//   setTimeout(() => {
//     callback();
//   }, 5000)
// }
// function personalDetails() {
//   console.log("Personal details are available to use");
// }
// getDataFromServer(personalDetails);






// Higher-order functions
//  The functions that use other functions as arguments or return functions are named higher-order functions.

// Use as arguments
// function iUseFunction(func) {
//     return func();
// }
// console.log(iUseFunction(function () { return 42 }));
 // iUseFunction() is higher-order because it accepts a function as an argument. 

// And even return functions from functions:

// Return function from function

// function iReturnFunction() {
//   return function() { return 42 };
// }
// const myFunc = iReturnFunction();    //  iReturnFunction() is a higher-order function because it returns another function.
// console.log(myFunc()); // => 42

// First-order functions   <========================================================
// the functions that use only primitives or objects as arguments,
// and only return primitives or objects are named first-order functions

// Assign functions to variables:

// const hiFunction = function() { 
//   return 'Hello!' 
// };
// hiFunction(); // => 'Hello!'  //hiFunction() is a first-order function since it simply returns a number.

// So, in JavaScript a function can be either first-order or higher-order.

// The higher-order functions help reduce the code duplication and favor the single-responsibility principle.

// Example of higher-order function:-
// For example, the array.map(mapperFunc) method is a higher-order function
//  because it accepts a mapper function as an argument:

// const numbers = [1, 2, 4];
// const doubles = numbers.map(function mapper(number) {
//   return 2 * number;
// });
// console.log(doubles); // [2, 4, 8]


// References:-
// Higher order function:-
// https://dmitripavlutin.com/javascript-higher-order-functions/

