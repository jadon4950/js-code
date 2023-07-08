
// function getLargest(arr) {
//     var res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > res){
//             res = arr[i]
//             console.log(arr[i]);
//         }
//     }
//     return res;
// }
// var largestInteger = getLargest(arr = [3, 6, 2, 56, 32, 5, 89, 32]);
// console.log(largestInteger, "Line no 13");


// function getLargest(arr) {
//    var result =arr.sort((a,b)=>a-b).reverse()[0];    // var result =arr.sort((a,b)=>b-a)[0];
//     return result;
// }
// var largestInteger = getLargest(arr = [3, 6, 2, 56, 32, 5, 89, 32]);
// console.log(largestInteger);

// When the sort() function compares two values, it sends the values to the compare function,
// and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.

// function getLargest(arr) {
//     var result =arr.sort((a,b)=>a-b);
//     console.log(result, "result");
//      var numInt =  result[result.length-1];
//      return numInt
//  }
//  var largestInteger = getLargest(arr = [3, 6, 2, 56, 32, 5, 89, 32]);
//  console.log(largestInteger);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Get second Largest Element

// secondLargest = [ 17,3, 21,5, 11, 13]

// var second = secondLargest.sort((a,b)=>{
//   return a-b;
// })
// var getSecondLAstIndex = second.length -2;
// var getElement = second[getSecondLAstIndex]
// console.log(getElement,"getElement");


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function getSecondLargest(arr) {

//     var result =arr.sort((a,b)=>a-b)
//      var numInt =  result[result.length-2];
//      return numInt
//  }
//  var largestInteger = getSecondLargest(arr = [3, 6, 2, 56, 32, 5, 89, 32]);
//  console.log(largestInteger);


// function getSecondLargest(arr) {
``
//     var result =arr.sort((a,b)=>b-a);
//     console.log(result, "result");
//      var numInt =  result[1];
//      return numInt;
//  }
//  var largestInteger = getSecondLargest(arr = [3, 6, 2, 56, 32, 5, 89, 32]);
//  console.log(largestInteger);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function reverseArr(arr) {
//     var output = [];
//     for (var i = arr.length - 1; i > -1; i--) {
//         output.push(arr[i]);
//     }
//     return output;
// }
// var largestInteger = reverseArr(arr = [3, 6, 2, 56, 32, 5, 89, 32]);
// console.log(largestInteger);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// //check array if sorted

// function checkIfSorted(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < arr[i - 1]){
//             return false;
//         }
//         return true;
//  }
// }
// console.log("checkifSorted", checkIfSorted(arr = [5, 11, 14, 18]));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//remove duplicates of an array

// function removeDuplicates(arr){
    // Use the regular Set constructor to transform an Array into a Set
//    const uniqueSet = new Set(arr);    // Creates a new Set 
//    console.log(uniqueSet);
//    console.log(...uniqueSet, "after Spread");    // Use the spread operator to transform a set into an Array.

// // OR
// const uniqueSet1 =[...new Set(arr)];
//    console.log(uniqueSet1, "uniqueSet1");
// // // OR
//  return Array.from(new Set(arr));    // Array.from() method returns an array from any iterable object.
// // OR

//   }
// console.log("removeDuplicates", removeDuplicates(arr= [5,5,10,10,15])); 

// used to create a new array instance from a given array
// In the case of a string, every alphabet of the string is converted to an element
// const result = Array.from("shubham")
// console.log(result, "result");
// of the new array instance and in the case of integer values, a new array instance simply takes the elements of the given array.

// var filter = arr.filter((item,index)=> {
//     arr.indexOf(item) === index;
//     console.log(arr.indexOf(item) , index)
// });
// return filter;
//  }
// console.log("removeDuplicates", removeDuplicates(arr= [5,5,10,10,15]));

// Note:
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// //for merge two JavaScript Object dynamically.

// var person = {
// 	name : 'John',
// 	age  : 24
// }
// var address = {
// 	addressLine1 : 'Some Location x',
// 	addressLine2 : 'Some Location y',
// 	city : 'NewYork'
// }  
// const merge = Object.assign({},person, address);
// console.log(merge);

// // or using spread operator
// const merged = {...person, ...address}
// console.log(merged);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// code for parameter arguments

// function myFunc(param1,param2) {
//     return myFunc.length;
//   }
//   console.log(myFunc());
//   console.log(myFunc("a","b"));
//   console.log(myFunc("a","b","c","d"));


// function myFunc1() {
//   console.log(myFunc1.length, "myFunc1");
//   return arguments.length;
// }
//  console.log(myFunc1());
//  console.log(myFunc1("a", "b"));
//  console.log(myFunc1("a", "b", "c", "d"));

// function func(x){
//   console.log(typeof x, arguments.length);
//   }
//   func(); //==> "undefined", 0
//   func(7); //==> "number", 1
//   func("1", "2", "3"); //==> "string", 3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//add an element at the begining of an array
// add one at the end?

// var myArray = ['a', 'b', 'c', 'd'];
// myArray.push('end');
// myArray.unshift('start');
// console.log(myArray); // ["start", "a", "b", "c", "d", "end"]
// myArray.shift('start'); // OR myArray.shift(0);
// console.log(myArray); // [ 'a', 'b', 'c', 'd', 'end' ]

//With ES6, one can use the spread operator:

// var myArray = ['a', 'b', 'c', 'd'];
// myArray = ['start', ...myArray];
// myArray = [...myArray, 'end'];
// console.log(myArray);

//Or, in short:

// myArray = ['start', ...myArray, 'end'];
// console.log(myArray);



//---------------------------------------------------------------------------------------------
// Object compare:-

// const k1 = { fruit: '🥝' };
// const k2 = { fruit: '🥝' };

// console.log(Object.entries(k1).toString() === Object.entries(k2).toString());

//---------------------------------------------------------------------------------------------

// const one = {
//   fruit: '🥝',
//   nutrients: {
//     energy: '255kJ',
//     minerals: {
//       name: 'calcium',
//     },
//   },
// };

// const two = {
//   fruit: '🥝',
//   nutrients: {
//     energy: '255kJ',
//     minerals: {
//       name: 'calcium',
//     },
//   },
// };

// // Using JavaScript
// console.log(JSON.stringify(one) === JSON.stringify(two)); // true
//


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



Promise.resolve().then(()=>{
    console.log(sum(1,2));
    })
    
    function sum(a,b){
        return a+b;
    }



