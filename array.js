//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; i< num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1 ;
// }
// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


// ======+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//remove duplicates of an array

// let arr = [5, 5, 10, 10, 15];

// var filter = arr.filter((item, index) => {      // 1st parameter element, 2nd parameter index // 3rd is Array

//      console.log(arr.indexOf(item) === index);  

//     return arr.indexOf(item) === index; 
// })
// console.log(filter);

// OR
// let arr = [5, 5, 10, 10, 15];
// function removeDuplicates(item, index, array) {      // 1st parameter element, 2nd parameter index // 3rd is Array

//     return arr.indexOf(item) === index;
// }
// console.log(arr.filter(removeDuplicates));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//even no. using filter
// Ex. IIFE function example:-

// (function(arr){ 
// var num = arr.filter((elements)=>{
// return elements % 2 === 0;
// })
// console.log(num);
// }(arr = [2,3,4,8,9,11,13,14,16]));

// OR 

// function useFilter(arr){
//     var even = arr.filter((element)=>{
//         	return element % 2 == 0;   // for Odd:- return element % 2 == 1; 
//          	});
//         console.log(even);
// }
// useFilter(arr=[2,3,4,8,9,11,13,14,16]);

// Find Even & odd without using filter

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// function filterOdd(arr) {
//   const filteredArr = [];   // blank array
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {  // odd condition
//       filteredArr.push(arr[i]);   // push in to blank array
//     }
//   }
//   return filteredArr;
// }
// console.log(filterOdd(arr));

// Output:
// [ 1, 3, 5, 7, 9, 11 ]


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// function filterEven(arr) {
//   const filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// }
// console.log(filterEven(arr));

// Output:
// [ 2, 4, 6, 8, 10 ]

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Sum of elements of an Array

// var arr = [4, 8, 7, 13, 12];
// var sum = 0;
// // Calculation the sum using forEach
// arr.forEach((x)=>{        // parameter   (element, index, array)
//   return sum = sum + x;  
// });
// console.log("Sum is->",sum);

// // OR

// Running the for loop

// var arr = [4, 8, 7, 13, 12];
// var sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];  // sum = sum + arr[i];
// }
// console.log("Sum is->",sum);

// OR
// Using reduce function to find the sum

//  var arr = [4, 8, 7, 13, 12]

// var sum = arr.reduce((acc, index)=>{   // accumulator(sum)  // current(element)
//  return acc = acc + index;    
//   }, 0)                          
// console.log("Sum is->",sum);

// O

// var arr = [1, 2, 35, 10, 20];
// var sum = arr.reduce((sum, index) =>{
// return sum + index;
// })
// console.log(sum);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// No. multiplied by 2 using map function

// const numbers = [1, 4, 9];
// const doubles = numbers.map((num) => num * 2);
// console.log(doubles, "doubles");



// const doubles1 = numbers.map((num, index) => {
//     console.log(index);
//    return  num * 2 + index;
// })
// console.log(doubles1, "doubles1");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Largest no. in an array

// var arr = [1, 2, 35, 10, 20];
// var output = arr.reduce((max, curr) => {   // acc = max
//   if (curr > max) {  
//     max = curr;
//   }
//   return max
// }, 0);  // use zero as an  initial value
// console.log(output, "output");

// Note:
// var output = users.reduce((max, curr) => {
//  //...........
// }, { });   // use blank object as initial object if we fetch data from objects
// console.log(output, "output");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const users = [
    { "id": 1, "firstname": "Michael ", "surname": "Strong", age: 48 },
    { "id": 2, "firstname": "John ", "surname": "Smith", age: 26 },
    { "id": 3, "firstname": "Pat ", "surname": "Brown", age: 21 }
]

// const filterName = users.filter((x) => x.age < 30).map((x)=> x.firstname);
// console.log(filterName);

// const filtername = users.reduce((acc, curr) => {
//     if(curr.age < 30){
//         acc.push(curr);
//     }
//     return acc;
// },[]).map((x)=> x.firstname);
// console.log(filtername);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// empty an array in JavaScript

// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];               // Created array

// var anotherArrayList = arrayList;  // Referenced arrayList by another variable
// console.log(arrayList, " arrayList before null");
// arrayList = []; // Empty the array
// console.log(arrayList, "arrayList after  nulnullnullnullnulll");
// console.log(anotherArrayList, "anotherList"); // Output ['a', 'b', 'c', 'd', 'e', 'f']

// // OR

// arrayList.length = 0; // Empty the array by setting length to 0
// console.log(arrayList, "arrayList after  length assign 0");

// // OR

// arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
// console.log(arrayList, "arrayList after  splice to length 0");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Check is a number is int or not?

// function isInt(num) {
//   return num % 1 === 0;
// }

// console.log(isInt(4)); // true
// console.log(isInt(12.2)); // false
// console.log(isInt(0.3)); // false

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Concat an array

// function duplicate(arr, arr2) {
//   return arr.concat(arr2);
// }
// console.log(duplicate(arr = [1, 2, 3, 4, 5, 6, 7], arr2  = [1, 2, 3, 4, 5, 6]));    // [1,2,3,4,5,1,2,3,4,5]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//delete element at in an array

// var arr = [1, 2, 3, 4, 5, 6]

//  arr.splice(2, 1);   // 1. indexNo , 2. No of elements to be deleted     
//  console.log(arr);  // delete an element at index 2

//  arr.splice(2,0 ,3);   // 1. indexNo , 2. No of elements to be deleted 3.  Pass element to be added 
//  console.log(arr);   // add element at index 2

//  arr.splice(2, 2);
//  console.log(arr); // 1 [1, 2, 5, 6]

//  arr.splice(2,0 ,3,4);
//  console.log(arr);   //[1, 2, 3, 4, 5, 6]


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Reverse of given String
//  var str = "Full Stack Tutorials";
// var output = str.split("").reverse().join("");
// console.log(output);             // slairotuT kcatS lluF

// "I am Shubham Jadon"
// "Jadon  Shubham am I"

// function reverseString(Str){
//   var StrReverse = Str.split(" ").reverse().join(" ");
//   console.log(StrReverse);
// }
// reverseString( Str = "I am Shubham  Jadon");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const arr = [{name: 'abc', marks: 10},{name: 'def', marks: 15},{name: 'ghi', marks: 25}]

// var result = arr.reduce((total, x)=>{
//     total += x.marks;
//     return total;
// },0);
// console.log(result);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Task of Group items on the basis of age of given array of object & return array of object with age & name

// let personDetail = [
//     { age: "20", person: "name1" },
//     { age: "21", person: "name2" },
//     { age: "25", person: "name3" },
//     { age: "21", person: "name4" },
//     { age: "35", person: "name5" },
// ]
// function functionGroup() {
//     let check = {}
//     personDetail.forEach((item) => {
//         if (!check[item.age]) {
//             check[item.age] = [item]
//         }
//         else {
//             console.log(check[item.age], "check[item.age]");
//             check[item.age].push(item)
//         }
//     })
//     return check
// }
// console.log(functionGroup(personDetail))

// Output
// {
//     '20': [ { age: '20', person: 'name1' } ],
//     '21': [ { age: '21', person: 'name2' }, { age: '21', person: 'name4' } ],
//     '25': [ { age: '25', person: 'name3' } ],
//     '35': [ { age: '35', person: 'name5' } ]
//   }



// Task of Group items on the basis of age of given array of object & return array of object with name but not age

// let userDetail = [
//     { age: "20", person: "name1" },
//     { age: "21", person: "name2" },
//     { age: "25", person: "name3" },
//     { age: "21", person: "name4" },
//     { age: "35", person: "name5" },
// ]
// function groupName() {
//     let check = {}
//     userDetail.forEach((item) => {
//         if (!check[item.age]) {
//             check[item.age] = [{ person: item.person }]
//         }
//         else {
//             check[item.age].push({ person: item.person })
//         }
//     })
//     return check
// }
// console.log(groupName(userDetail))

// Output:
// {
//     '20': [ { person: 'name1' } ],
//     '21': [ { person: 'name2' }, { person: 'name4' } ],
//     '25': [ { person: 'name3' } ],
//     '35': [ { person: 'name5' } ]
//   }


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// deep flatten an array in JavaScript   // Deep flattening means that the array would be completely flattened.

// Define the array

// let arr = [1, [2, [3, [4, 5], 6], 7, 8], 9, 10];

// // console.log("Original Array:", arr);

// let flatArrOne = arr.flat();
// console.log("Array flattened to depth of 1:", flatArrOne );  // one dimension flat

// let flatArrTwo = arr.flat(2);
// console.log("Array flattened to depth of 2:",  flatArrTwo );  // 2D flat

//  let flatArrComplete = arr.flat(Infinity);
//  console.log("Array flattened completely:", flatArrComplete);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// palindrome for string

// function palindrome(str) {
//     let beg = 0; end = str.length - 1;
//     while (beg < end) {
//         if (str.charAt(beg) != str.charAt(end)) {
//             return false;
//         }
//         beg++, end--
//     }
//     return true;
// }
// let isPalindrome = palindrome(str = "ABCDCBA");
// console.log("isPalindrome", isPalindrome);

// palindrome using for loop 

// function palindrome(str) {
//     console.log( str.length / 2, " str.length / 2 - 1")
//     n = str.length / 2
//     nLength = str.length-1
//     for (i = 0; i <  n -1; i++) {
//         if (str.charAt(i) != str.charAt((nLength)-i)) {
//             return false;
//         }
//     }
//     return true;
// }
// let isPalindrome = palindrome(str = "ABCDCBA");
// console.log("isPalindrome", isPalindrome);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// palindrome using js

// const palindrome = (str)=>{
// if(str.split("").reverse().join("") !== str){
//     return false;
// }
// return true;
// }
// let isPalindrome = palindrome(str = "ABCDCBA");
// console.log("isPalindrome", isPalindrome);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// program for anagram

// var str = "cleartrip";
// var str1 = "tripclear";
// var check = true;
// function anagram(str, str1) {
//     if (str.length !== str1.length) {
//         check = false;
//         console.log("not an Anagram");
//     }
//     if (check) {
//         if (str.toLowerCase().split("").sort().join("") === str1.toLowerCase().split("").sort().join(""))
//             console.log("Anagram", check)
//     }
//     else {
//         console.log("not an Anagram");
//     }
// }
// anagram(str, str1);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// var a = [],  b = []
// console.log(a==b);  // false
// console.log(a === b);   // false
// console.log(a.length);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



