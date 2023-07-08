
// Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another.

// Number to String Conversion: When any string or non-string value is added to a string,
// it always converts the non-string value to a string implicitly.


// // The Number 10 is converted to
// // string '10' and then '+'
// // concatenates both strings
// var x = 10 + '20';
// var y = '20' + 10;

// // The Boolean value true is converted
// // to string 'true' and then '+'
// // concatenates both the strings
// var z = true + '10';

// console.log(x);
// console.log(y);
// console.log(z);

// 2. String to Number Conversion: When an operation like subtraction (-), multiplication (*), division (/) 
// or modulus (%) is performed, all the values that are not number are converted into the number data type,
// as these operations can be performed between numbers only.


//	The string '5' is converted
//	to number 5 in all cases
//	implicitly
// var w = 10 - '5';
// var x = 10 * '5';
// var y = 10 / '5';
// var z = 10 % '5';

// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);

// 3. Boolean to Number: When a Boolean is added to a Number,
// the Boolean value is converted to a number as it is safer and easier to convert Boolean values to Number values.

// // The Boolean value true is
// // converted to number 1 and
// // then operation is performed
// var x = true + 2;

// // The Boolean value false is
// // converted to number 0 and
// // then operation is performed
// var y = false + 2;
// console.log(x);
// console.log(y);  

// 4. The Equality Operator: The equality operator (==) can be used to compare values irrespective of their type.
// This is done by coercing a non-number data type to a number.

// // Should output 'true' as string '10'
// // is coerced to number 10
// var x = (10 == '10');

// // Should output 'true', as boolean true
// // is coerced to number 1
// var y = (true == 1);

// // Should output 'false' as string 'true'
// // is coerced to NaN which is not equal to
// // 1 of Boolean true
// var z = (true == 'true');

// console.log(x);
// console.log(y);
// console.log(z);

//------------------------------------------------------------------------

// console.log("1" + 1);
// console.log("A" - 1);
// console.log(2 + "-2" + "2");
// console.log(2 - "2" + "2");
// console.log("Hello" - "World" + 78);
// console.log("Hello"+ "78");
// console.log(2 + "-2"+ 2);    // to be cleared


// console.log(1 +  "2" + "2");
// console.log(1 +  "-2" + "3");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);

// console.log(1 < 2);
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// console.log(1 + true);
// console.log(1 - "true");

// console.log(typeof typeof 1);    // typeof 1 = 'number';  // return number string
// console.log(typeof 1);

// console.log("0 || 1 = "+(0 || 1));  //1
// console.log("1 || 2 = "+(1 || 2));  //1
// console.log("0 && 1 = "+(0 && 1));  //0
// console.log("1 && 2 = "+(1 && 2));  //2

// expr1 && expr2:- Returns expr1 if it can be converted to false; otherwise, returns expr2. \
// Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.

const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && (3 === 4); // f && f returns false
const a5 = 'Cat' && 'Dog'; // t && t returns Dog
const a6 = false && 'Cat'; // f && t returns false
const a7 = 'Cat' && false; // t && f returns false
// console.log(a1, a2, a3,a4,a5,a6,a7);

// expr1 || expr2:- Returns expr1 if it can be converted to true; otherwise, returns expr2. 
// Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false

const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || (3 === 4); // f || f returns false
const o5 = 'Cat' || 'Dog'; // t || t returns Cat
const o6 = false || 'Cat'; // f || t returns Cat
const o7 = 'Cat' || false; // t || f returns Cat
// console.log(o1, o2, o3, o4, o5, o6, o7 );

