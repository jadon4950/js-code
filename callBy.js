
// Document link :-
// https://medium.com/swlh/call-by-value-call-by-reference-in-javascript-c5738600d9cd

// Primitive       Non-Primitive
// Number          Arrays
// String          Objects
// Boolean
// Undefined
// Null

// Call by value

// When a variable is passed as a parameter to a function, if any changes are made to the parameter, 
// the original variable will remain unaffected. This is known as call by value 
// and this is true for all values having a primitive data type.

// let original = 10;
// function updateOriginal(originalVal) {
//   console.log(original, "original");
//   originalVal += 10
//   console.log(originalVal, "originalVal");
// }
// updateOriginal(original);

//  when we pass original to the updateOriginal function, we pass the value directly
//  and not the reference to the value(memory address allocated).
// Any changes made to the value does not update the actual reference of the original value.

// =+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Call by reference

// When a variable’s reference(address) is passed to a function’s parameter,
// any changes made to the parameter will update the original variable reference.
// This is known as call by reference and this is true for all values having a non-primitive data type.

// let myObj = {
//   value:10
// }
// function updateVal(objRef){
//     objRef.value = 20;
//     console.log( objRef, " objRef");
//     console.log( myObj, " myObj");
// }
// updateVal(myObj);

// Solution
//  access the properties and operate on them without updating the object itself
//  This is one of the basics of immutable style of programming

// let myObj = {
//     value:10
//   }
//   function updateValue(objRef){
//   //creates a new object reference and assigns objRef properties to //the object
//     let copy = Object.assign({},objRef);  // cloning of an object
//     copy.value = 20;
//     console.log(copy.value);
//   }
//   updateValue(myObj);
//   console.log(myObj.value);


// The same can happen while working with arrays, as they are also treated as Objects in JavaScript:

//  let myArray =[1,2,3];
// function addToArray(arrayRef,value){
//     arrayRef.push(value);
//     return arrayRef;
// }
// console.log(addToArray(myArray,4), "arrayRef");
// console.log(myArray, 'myArray');

// So the best way to operate on arrays without causing any side effects is by creating a copy of the array. 
//We can use the higher order function map, as it returns a new array(object reference)

// let myArray =[1,2,3];
// function addToArray(arrayRef,value){
//     //returns a new array
//     let newArray = arrayRef.map(val=>val);
//     newArray.push(value);
//     console.log(newArray, "newArray");
//     console.log(myArray, "myArray");
// }
// addToArray(myArray,4);

// There is another case where one can get confused and that is when we are working with an array of objects.

// let myArray = [{a:1},{b:2},{c:3}];
// function addToArray(arrayRef,value){
//     var newArray = arrayRef.map(val=>val);
//     newArray.push(value);
//     console.log(newArray);
// }
// addToArray(myArray,{d:4});
// console.log(myArray);

// if we try to update the value of {a:1} to {a:2} in newArray.

let myArray =[{a:1},{b:2},{c:3}];
function addToArray(arrayRef,value){
    var newArray = arrayRef.map(val=>val);
    newArray.push(value);
    newArray[0].a = 10;
    console.log(newArray);
}
addToArray(myArray,{d:4});
 console.log(myArray);

// The answer is simpler than you think, as we know Objects are references, so when we push an object to an array,
// we push its reference, not value. So any changes made to the object will directly reflect in all the occurrences. 
// In our case {a:1} was updated in newArray to {a:10}, this change is also reflected in myArray. 


