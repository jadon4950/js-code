

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++====

// (function () {
//   console.log(1);
//   setTimeout(() => { console.log(2) }, 1000);
//   setTimeout(function () { console.log(3) }, 0);
//   console.log(4);
// })();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function sum (num1, num2){
//     return num1+num2;
// }
// setTimeout(()=>{
//     console.log(sum(4,5));  // 4,5 argumaents
// },5000);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var result = Math.max(10,2,NaN);
// var result1 = Math.max();
// var result2 = Math.min();
// console.log(result);
// console.log(result1);
// console.log(result2);

/////////////////////////////////////////////////////////////////////////////

// function f() {
//     // It can be accessible any
//     // where within this function
//     var a = 10;
//     console.log(a)
// }
// f();
// // A cannot be accessible
// // outside of function
// console.log(a);

/////////////////////////////////////////////////////////////////////////////

// var a = 10
// console.log(a);
// // User can re-declare
// // variable using var
// var a = 8
// console.log(a); 
// // User can update var variable
// a = 7
// console.log(a);  // but let & const can't have same var in same scope.


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function func1() {
//   return {
//     name: "Full Stack Tutorials",
//   };
// }
// console.log(func1());


// console.log(typeof undefined);    // undefined
// console.log(typeof null);         // object
// console.log(typeof NULL);         // undefined
// console.log(typeof typeof 1);     // string


// // Difference between null & undefined :-

// console.log(typeof null);          // "object" (not "null" for legacy reasons)
// console.log(typeof undefined );    // "undefined"
// console.log(null === undefined );  // false
// console.log(null  == undefined);   // true
// console.log(!null );               // true
// console.log(isNaN(1 + null) );      // false
// console.log(isNaN(1 + undefined) ); // true
// console.log((1 + null) );            // 1
// console.log((1 + undefined) );      // NaN


// function mul (x) {
//   return function (y) { // anonymous function
//     return function (z) { // anonymous function
//       return x * y * z;
//     };
//   };
// }
// console.log(mul(4)(3)(4));


//----------------------------------------------------------------------------

// var arrA = [0, 1, 2, 3, 4, 5];
// var arrB = arrA.slice();
// arrB[0] = 42;
// console.log(arrA);
// console.log(arrB); 
// The slice function copies all the elements of the array returning the new array. 
// That's why arrA and arrB reference two completely different arrays.


// ------------------------------------------------------------------------

// function foo(){
//    var  c = 21;
//   console.log(c); 
//   let c = 10;
//    console.log(c);   // can't pass same variable name in same scope with let & const.
//   }
//   foo();

//-----------------------------------------------------------------------

// var x = 23;
// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//    var x = 21;
//   })();
// })();

//--------------------------------------------------------------------------------

// convert an Object {} into an Array [] in JavaScript

// let obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };

// //Method 1: Convert the keys to Array using - Object.keys()
// console.log(Object.keys(obj));

// // Method 2 Converts the Values to Array using - Object.values()
// console.log(Object.values(obj));

// // Method 3 Converts both keys and values using - Object.entries()
// console.log(Object.entries(obj));

// --------------------------------------------------------------------------------

// convert an Array [] to Object {} in JavaScript?


// let arr = ["1", "Test User", "25", "Developer"];
// let arr1 = [
//   ["id", "1"],
//   ["name", "Test User"],
//   ["age", "25"],
//   ["profession", "Developer"],
// ];

// //Method 1: Using Object.assign() method
// console.log(Object.assign({}, arr));
// //{0: "1", 1: "Test User", 2: "25", 3: "Developer"}

// // Method 2 Using Spread operator
// console.log({ ...arr });
// //{0: "1", 1: "Test User", 2: "25", 3: "Developer"}

// Method 3: Using Object.fromEntries() method
// console.log(Object.fromEntries(arr1));           // transforms a list of key-value pairs into an object
//{id: "1", name: "Test User", age: "25", profession: "Developer"}


// --------------------------------------------------------------------------------

// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48

// function mul (x) {
//     return function (y) { // anonymous function
//       return function (z) { // anonymous function
//         return x * y * z;
//       };
//     };
//   }
// Here mul function accept the first argument and return anonymous function which take
// the second parameter and return anonymous function which take the third parameter
// and return multiplication of arguments which is being passed in successive

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);

// Above code would give output 1undefined. If condition statement evaluate using eval 
// so eval(function f() {}) which return function f() {} which is true so inside 
// if statement code execute. typeof f return undefined because if statement code execute 
// at run time, so statement inside if condition evaluated at run time.


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);
// Numbers in JavaScript are all treated with floating point precision, 
//and as such, may not always yield the expected results.”



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  var a=3;
//  var b=a++;  // a++ first assign & then increase
//  var c=++a;  // ++a first increase & then assign 
//  console.log(a,"a");
//  console.log(b,"b");
//  console.log(c,"c");

//======================================================================================

// function foo() {
//   let a = b = 0;
//   console.log( a);
//   a++;
//   console.log( a,"a value after a++");
//   console.log(typeof a, "==>inside function type of a is number");
//   return a;
// }
// foo();
// console.log(typeof a, "outside function type of a");
// console.log( b);


//----------------------------------------------------------------------

// (function(){
//   var a = b = 3;
// })();
// // console.log("value of a", a);
// console.log("value of b", b);
// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Javascript program to swap two
// numbers without using temporary
// variable

// let x = 10, y = 5;
// console.log("Before Swapping: x = " +x + ", y = " + y);
// x = x + y;   // x now becomes 15
// y = x - y;   // y becomes 10
// x = x - y; 	// x becomes 5

// console.log("After Swapping: x = " +x + ", y = " + y);

// let x = 10, y = 5;
// console.log("Before Swapping: x = " +x + ", y = " + y);
// x = x * y;     	// x now becomes 50
// y = x / y;      // // y becomes 10
// x = x / y;      // 	// x becomes 5

// console.log("After Swapping: x = " +x + ", y = " + y);


// // By value (primitives)
// var a = 5;
// var b;
// b = a;
// a = 3;
// console.log(a);
// console.log(b);

// // By reference (all objects (including functions))
// var c = { greeting : 'Welcome' };
// var d;
// d = c;

// // Mutating the value of c
// c.greeting = 'Welcome to geeksforgeeks';
// console.log(c);
// console.log(d);

//============================================================================================


// let x= {}, y = {name:"Ronny"},z = {name:"John"};

// console.log(x[y], "1st");
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]);