
// function checkInt(item){

//     if(item %  1 != 0){
//         return false;
//     } 
//     return true;

// }

// console.log(checkInt(5));
// console.log(checkInt(11.002));
// console.log(checkInt("string"));


    let a = ['X', 'Y', 'Z', 'Q'];
const b = a;
b[1] = 'P';
console.log(a);  // ['X', 'P', 'Z', 'Q'];
console.log(b);  // ['X', 'P', 'Z', 'Q'];
