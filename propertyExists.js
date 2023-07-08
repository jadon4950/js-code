
// Document Link:-
// https://www.javascripttutorial.net/object/javascript-check-if-property-exists/

// Use the hasOwnProperty() method

// hasOwnProperty() that returns true if a property exists in an object:

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
//  };
//  let result = person.hasOwnProperty('firstName');
// console.log(result, "result"); // true

// let result2 = person.hasOwnProperty('age');
// console.log(result2, "result2"); // false

// Note that the hasOwnProperty() looks for the property in the own properties of the object.

// For example, all objects inherit the toString property of the Object,
// the hasOwnProperty() method does not detect it as a property:

// let result3 = person.hasOwnProperty('toString'); 
// console.log(result3, "result3"); // false

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Use the in operator

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
//  };
 
//  let result = 'firstName' in person; 
//  console.log(result, "result"); // true
 
//  result2 = 'age' in person;
//  console.log(result2, "result2"); // false

// Unlike the hasOwnProperty() method, the in operator looks for the property in both own properties
// and inherited properties of the object.

// The following example uses the in operator to check if the toString property exists in the person object.
// It returns true because the toString is an inherited property of the person object.

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age:20
//  };
//  let result3 = 'toString' in person;
//  console.log(result3, "result3"); // true

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Comparing the property with undefined

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
//  };
 
//  let result = person.firstName !== undefined;
//  console.log(result); // true

 // If an object has a property whose value is undefined, 
 // then comparing the property with undefined will return an incorrect result. For example:
 
//  let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: undefined
//  };
 
//  let result2 = person.age !== undefined;
//  console.log(result2); // false

// the age property does exist in the person object. However, its initial value is undefined. 
// Therefore, comparing the person.age with undefined returns false , which is not expected.


