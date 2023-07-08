


// let array = [
//    {
//        name: 'John',
//        age: 30
//    },
//    {
//        name: 'Jane',
//        age: 28
//    },
//     {
//        name: 'Jane4',
//        age: 28
//    }
// ];
// let array1 = 
//  [{
//        name: 'John1',
//        age: 301
//  },
//  {
//        name: 'John',
//        age: 301
//  }]

//  var array3 = [...array, ...array1]
//  // console.log(array3, "array3");

//      function removeDuplicate(arr, name){
//          console.log(arr)
//        let key = []
// var result =[...new Map( arr.map(item => [item.age, item])).values()]  //  ids = new Set(deSelectedRows.map(({ id }) => id)))
//  return result

//      }
//     console.log(removeDuplicate(array3, "name"));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// create a new array that contains all those elements from the array of objects
// whose value for "city" key is present in the array of literals

const source = [1, 2, 3, 4, 5];
const cities = [{ city: 4 }, { city: 6 }, { city: 8 }];

// const filterByLiterals = (objArr, literalArr) => {

//    const common = objArr.filter(el => {

//        console.log(el.city);             // String ??

//       return literalArr.includes(el['city']);
//    });

//    return common;
// };
// console.log(filterByLiterals(cities, source));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Converting array of objects to an object of objects in JavaScript

// const arr = [{id:1,name:"aa"},{id:2,name:"bb"},{id:3,name:"cc"}];

// const arrayToObject = arr => {
//    const res = {};
//    for(let i = 0; i < arr.length; i++){
//       const key = arr[i]['id'];
//       res[key] = arr[i];
//       delete res[key]['id'];
//    };
//    return res;
// }
//  console.log(arrayToObject(arr));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// https://www.tutorialspoint.com/creating-an-array-of-objects-based-on-another-array-of-objects-javascript
// Creating an array of objects based on another array of objects



// const arr = [
//     {"user":"dan","liked":"yes","age":"22"},
//     {"user":"sarah","liked":"no","age":"21"},
//      {"user":"john","liked":"yes","age":"23"},
//  ];
//  const mapToPair = (arr = []) => {
//     const result = arr.map(obj => {
//        const res = {};
//        res[obj['user']] = obj['liked'];
//        return res;
//     });
//     return result;
//  };
//  console.log(mapToPair(arr));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// https://www.tutorialspoint.com/sort-array-based-on-presence-of-fields-in-objects-javascript
// Combine array of objects in JavaScript

//  const people = [{
//     firstName: 'Ram',
//     id: 301
//  }, {
//     firstName: 'Shyam',
//     lastName: 'Singh',
//     id: 1016
//  }, {
//     firstName: 'Dinesh',
//     lastName: 'Lamba',
//     id: 231
//  }, {
//     id: 341
//  }, {
//     firstName: 'Karan',
//     lastName: 'Malhotra',
//     id: 441
//  }, {
//     id: 8881
//  }, {
//     firstName: 'Vivek',
//     id: 301
//  }];
//     const sorter = (a, b) => {
//        if(a.firstName && a.lastName){
//           return -1;
//           }
//        else if(b.firstName || b.lastName){
//              return 1;
//        }else{
//           return -1;
//     };
//  };
//  people.sort(sorter);
//  console.log(people);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// https://www.tutorialspoint.com/filtering-array-to-contain-palindrome-elements-in-javascript
// Filtering array to contain palindrome elements in JavaScript

// const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
// const isPalindrome = el => {
//    const str = String(el);
//    let i = 0;
//    let j = str.length - 1;
//    while(i < j) {
//       if(str[i] === str[j]) {
//          i++;
//          j--;
//       } else {
//          return false;
//       }
//    }
//    return true;
// };
// const findPalindrome = arr => {
//    return arr.filter(el => isPalindrome(el));
// };
// console.log(findPalindrome(arr));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// flatten an object with array properties into one array 

// const obj = {
//     arr_a: [9, 3, 2],
//     arr_b: [1, 5, 0],
//     arr_c: [7, 18]
//  };
//  const objectToArray = (obj) => {
//     const res = [];
//     for(key in obj){
//        const el = obj[key];
//        console.log(el, "el");
//        res.push(...el);
//     };
//     return res;
//  };
//  console.log(objectToArray(obj));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// https://www.tutorialspoint.com/best-way-to-find-two-numbers-in-an-array-whose-sum-is-a-specific-number-with-javascript
//  find two numbers in an array whose sum is a specific number 


// function twoSum(arr, S)  {
//    const sum = [];
//     for(let i = 0; i< arr.length; i++) {
//       for(let j = i+1;  j < arr.length; j++) {
//         if(S == arr[i] + arr[j])
//         {
//           sum.push([arr[i],arr[j]])
//         }
//       }
//     }
//    return sum
//   }
//    var numbers = [10,3,40,50,20,30,100, 40]
//    console.log("The Two numbers which has the sum 80=");
//    console.log(twoSum(numbers, 80));

// OR 

// let  sumArray = (arr,target) => {
//    let res = []
//    arr.forEach((element,index) => {
//      console.log(index);      
//      arr.forEach((element2, index2) => {
//              if(  (index2 > index) && (element + element2 == target)){
//                res.push({element, element2})             
//              }
//          });
//      });
//      return res
//    }
//    console.log(sumArray([8, 7, 2, 5, 3, 1],10))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  https://www.tutorialspoint.com/how-to-find-specific-words-in-an-array-with-javascript
// find specific words in an array 

// var keywords = ["John", "AUS", "JavaScript", "Hockey"];
// var sentence = ["My Name is John Smith. My Favourite Subject is JavaScript. I live in US. I like Hockey"];
// const matched = [];
// for (let index = 0; index < sentence.length; index++) {
//    for (let outerIndex = 0; outerIndex < keywords.length; outerIndex++) {
//       if (sentence[index].includes(keywords[outerIndex])) {
//          matched.push(keywords[outerIndex]);
//       }
//    }
// }
// console.log("The matched keywords are==");
// console.log(matched);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// https://www.tutorialspoint.com/how-can-i-remove-a-specific-item-from-an-array-javascript
// remove a specific item from an array 


// function removeItemOnce(arr, value) {
//    var index = arr.indexOf(value);
//    if (index > -1) {
//      arr.splice(index, 1);
//    }
//    return arr;
//  }

//  function removeItemAll(arr, value) {
//    var i = 0;
//    while (i < arr.length) {
//      if (arr[i] === value) {
//        arr.splice(i, 1);
//      } else {
//        ++i;
//      }
//    }
//    return arr;
//  }
// Usage
// console.log(removeItemOnce([2,5,9,1,5,8,5], 5))
//  console.log(removeItemAll([2,5,9,1,5,8,5], 5))


//  let value = 3

// let arr = [1, 2, 3, 4, 5, 3]

// arr = arr.filter(item => item !== value);

// console.log(arr);
// // [ 1, 2, 4, 5 ]


// Remove multiple items:-

// let forDeletion = [2, 3, 5]

// let arr = [1, 2, 3, 4, 5, 3]

// arr = arr.filter(item => !forDeletion.includes(item))

// console.log(arr)
// // [ 1, 4 ]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// https://www.tutorialspoint.com/filter-array-of-objects-by-a-specific-property-in-javascript
//Filter array of objects by a specific property 

// let firstCustomerDetails =
//    [
//       { firstName: 'John', amount: 100 },
//       { firstName: 'David', amount: 50 },
//       { firstName: 'Bob', amount: 80 
//    ];
// let secondCustomerDetails =
//    [
//       { firstName: 'John', amount: 400 },
//       { firstName: 'David', amount: 70 },
//       { firstName: 'Bob', amount: 40 }
//    ];
// var output = firstCustomerDetails.map((key, position) => {
//    console.log(position, "position")

//    return key.amount > secondCustomerDetails[position].amount ? key : secondCustomerDetails[position]
// }
// );
// console.log(output);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// https://www.tutorialspoint.com/sorting-an-array-of-objects-by-property-values-javascript
// Sorting an array of objects by property values

// const homes = [
//    {
//       "h_id": "3",
//       "city": "Dallas",
//       "state": "TX",
//       "zip": "75201",
//       "price": "162500"
//    }, {
//       "h_id": "4",
//       "city": "Bevery Hills",
//       "state": "CA",
//       "zip": "90210",
//       "price": "319250"
//    }, {
//       "h_id": "5",
//       "city": "New York",
//       "state": "NY",
//       "zip": "00010",
//       "price": "962500"
//    }
//    ];
//    const sortByPrice = arr => {
//       arr.sort((a, b) => {
//          return parseFloat(a.price) - parseFloat(b.price);
//       });
//    };
//    sortByPrice(homes);
//    console.log(homes);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// https://www.tutorialspoint.com/sort-array-of-objects-by-string-property-value-in-javascript
// Sort array of objects by string property 

// function func(object1, object2) {
//    if (object1.Company < object2.Company)
//       return -1;
//    if (object1.Company > object2.Company)
//       return 1;
//    return 0;
// }
// const array = [
//    { Company: 'Oneplus', Manufacturing: 'China' },
//    { Company: 'Samsung', Manufacturing: 'South korea' },
//    { Company: 'Nothing', Manufacturing: 'India' }
// ]
// console.log(array.sort(func));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// https://www.tutorialspoint.com/add-property-to-common-items-in-array-and-array-of-objects-javascript
// Add property to common items in array and array of objects

// const firstname = ['John', 'David', 'Bob'];
// const studentDetails = [
//    {
//       firstname: 'Carol',
//       marks: 78
//    },
//    {
//       firstname: 'Mike',
//       marks: 89
//    },
//    {
//       firstname: 'Bob',
//       marks: 86
//    }
// ];
// const data = new Set(firstname);
// const result = studentDetails.map(tmpObject => {
//    if (data.has(tmpObject.firstname)) tmpObject.isPresent = "This is present";
//    else
//       tmpObject.isPresent = "This is not present";
//    return tmpObject;
// });
// console.log(result);

// https://www.tutorialspoint.com/sorting-an-array-objects-by-property-having-null-value-in-javascript
// Sorting an array objects by property having null value

// const arr = [
//    {key: 'a', value: 100},
//    {key: 'a', value: null},
//    {key: 'a', value: 0}
// ];
// const sortNullishValues = (arr = []) => {
//    const assignValue = val => {
//       if(val === null){
//          return Infinity;
//       }
//       else{
//          return val;
//       };
//    };
//    const sorter = (a, b) => {
//       return assignValue(a.value) - assignValue(b.value);
//    };
//    arr.sort(sorter);
// }
// sortNullishValues(arr);
// console.log(arr);


