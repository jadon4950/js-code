// // iterate over an array 

// const iterable = [10, 20, 30];

// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// }

// // iterate over a string
 const iterableStr = "Shubham"
// for (let value of iterableStr) {
//     console.log(value);
//   }

// // iterate over a set

//  const iterableSet = new Set([1, 1, 2, 2, 3, 3]);

// for (const value of iterableSet) {
//   console.log(value);
// }


//  loop through an object

// Value & key Iteration(For..Of)

// function valueInArray(obj) {

//     var resultArr = Object.values(obj)
//     console.log("Value is >> ", resultArr);  // return Array ==> Value is >>  [ 10, 20, 30 ]
// }
// valueInArray(obj = { a: 10, b: 20, c: 30 });


// function valueIteration(obj) {

//     for (let value of Object.values(obj)) {
//         console.log("Value is >> ", value);  // return one by one value.
//     }
// };
// valueIteration(obj = { a: 10, b: 20, c: 30 });  

// // OR

// function keysIteration(obj){
//     for (let keys of Object.keys(obj)) {
//         console.log("Keys is >> ", keys);
//     }
//   };
//   keysIteration(obj = {a: 10, b: 20});

// iterate over a map

const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
}
// output:-
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// output:-
// 1
// 2
// 3

// Conclusion
// for...of - Use to loop over strings and arrays.
// for...in - Use to loop over objects.


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// for....in

 const arr = [3, 5, 7];
 arr.foo = 'hello';

// for (const h in arr) {
//   console.log(h, arr[h]);
// }

// for (const i of arr) {   // iterate over an array
//   console.log(i);
// }
// Logs: 3 5 7




