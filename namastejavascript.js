// Namaste JavaScript Program

// Temporal Dead Zone
// console.log(s);
// var  s =20;      // o/p:- undefined

// console.log(s);
// let  s =20;       // o/p:- ReferenceError: Cannot access 's' before initialization


// let s;
// console.log(s);
//  s =20;           // o/p:- undefined



// Type Error Program 

// getName();
// console.log(x);
// var x = 7;
// function getName() {
//  console.log("Namaste Javascript");
// }

// console.log(getName) // output: undefined
//  getName(); //output: Uncaught TypeError: getName is not a function
// var getName = () => {
//  console.log("Hello!");
// }



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Closures  with examples   ====>>
// function with its lexical scope that bumdles together forms a Closure.

// function x() {
//     var a = 7;    
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();     /*OUTPUT: 7*/

///////////////////////////////////////////////////////////////////////////////

// function x() {
//     var a = 7;    
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();       /* OUTPUT: [Function: y] */
// console.log(z);

/////////////////////////////////////////////////////////////////////////////

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// //line *
// var z = x();
// console.log(z);
// // return function with several lines of code

// z(); 
  // function are return from another function they still maintain their lexical scope.(they remember where they are actually present.)
                         /*OUTPUT: 7*/


/////////////////////////////////////////////////////////////////////////////

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//      a = 100;
//     return y;
// }
// //line *
// var z = x();
// console.log(z);
// // return function with several lines of code

// z(); 
  // function are return from another function they still maintain their lexical scope.(they remember wahere they are actually present.)
                         /*OUTPUT: 100*/
//////////////////////////////////////////////////////////////////////////////

// function x() {
//     var a = 7;
//     return  function y() {
//         console.log(a);
//     }  
// }
// var z = x();
// z();                    /*OUTPUT: 7*/

/////////////////////////////////////////////////////////////////////////////

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//      var a = 25;
//     return y;
// }
// var z = x();
// z();


/////////////////////////////////////////////////////////////////////////////

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//      var a = 25;
//     return y;
// }
//  x()();

 
/////////////////////////////////////////////////////////////////////////////

// const a = 10;
// b = 100;

// console.log(a);
// console.log(typeof(b));

// // OUTPUT: Uncaught TypeError: Assignment to constant variable.

// First order function

// function sayHello() {
//   return "Hello, ";
// }
// function greeting(helloMessage, name) {
//  console.log(helloMessage() + name);
// }
// // Pass `sayHello` as an argument to `greeting` function
// greeting(sayHello, "JavaScript!");
// Hello, JavaScript!
// Note: The function that we pass as an argument to another function is called a callback function. sayHello() is a callback function.
// Note: A function that returns a function or takes other functions as arguments is called a higher-order function.

//  const sayHello = function() {
//     return function() {
//        console.log("Hello!");
//     }
//  }
//  const myFunc = sayHello();
//  myFunc();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for (let i = 0; i < 5; i++) {
//     (function(x) {
//         setTimeout(function() { console.log(x); }, x * 1000 );
//     })(i);
// }

// for (var i = 0; i < 5; i++) {
//     (function(x) {
//          setTimeout(function() { console.log(x); }, x * 1000 );
//     })(i);
// }