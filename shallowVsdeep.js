
// Document link:-
// https://www.geeksforgeeks.org/what-is-shallow-copy-and-deep-copy-in-javascript/


// Shallow Copy: When a reference variable is copied into a new reference variable using the assignment operator,
// a shallow copy of the referenced object is created.
// In simple words, a reference variable mainly stores the address of the object it refers to.

// Shallow Copy by using Object.Assign() method

//      let person = {
//       firstName: 'John',
//       lastName: 'Doe',
//       address: {
//           street: 'North 1st street',
//           city: 'San Jose',
//           state: 'CA',
//           country: 'USA'
//       }
//   };
//   console.log(person, "person");
//   let copiedPerson = Object.assign({}, person);
//   // console.log(copiedPerson.firstName, "copiedPerson.firstName");

//   copiedPerson.firstName = 'Jane'; // disconnected
//  // console.log(copiedPerson.firstName, "copiedPerson.firstName");

//   copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
//   copiedPerson.address.city = 'Mountain View'; // connected

//   console.log(person, "person after modify clone copiedPerson");


// Deep Copy  
// deep copy makes a copy of all the members of the old object,
// allocates separate memory location for the new object and then assigns the copied members to the new object. 

// Deep copy by using JSON.stringify() or JSON.parse() method

//   let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     }
// };

// let copiedPersonDeepCopy = JSON.parse(JSON.stringify(person));

// copiedPersonDeepCopy.firstName = 'Jane'; // disconnected

// copiedPersonDeepCopy.address.street = 'Amphitheatre Parkway';
// copiedPersonDeepCopy.address.city = 'Mountain View';

// console.log(person, "After modifying clone object it is remain same.");

// console.log(copiedPersonDeepCopy, "copiedPersonDeepCopy");


// Object cloning by using 3 methods:-

//   const person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// // using spread ...
// let p1 = { ...person };

// // using  Object.assign() method
// let p2 = Object.assign({}, person);

// // using JSON
// let p3 = JSON.parse(JSON.stringify(person));

// console.log(p1, "using spread operator");
// console.log(p2, "using Object.assign() method");
// console.log(p2, "using JSON.stringify() or JSON.parse() method");

// Note: Differences shallow copy vs deep copy
// 1. copy reference of memory in shallow copy or Reason: both the object are pointing to same reference.
// 2. copy only deep object in shallow copy but in deep shllow it also copies the nested object.
// 3. date & function are not work properly when we using JSON.stringify() or JSON.parse() method"
// 4. we resolve it by using lodash library or by using loop inside copy each key from 1st to 2nd object.

// 5. by using spread operator create shallow copy but not deep copy

// console.log(Object.fromEntries(arr1));           // transforms a list of key-value pairs into an object