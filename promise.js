

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 2000);
//   });
  
//   myPromise
//   .then((value) => {
//     console.log(2 * value);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
  
  
  // function slowAddition(n1, n2) {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(n1 + n2), 2000);
  //   });
  // }
  // slowAddition(1, 5).then(sum => console.log(sum));      // After 2 seconds logs "6"
  
  // await operator to make the function wait for the promise to be resolved.
  
  // async function add(num1,num2){
  //   return num1+num2;
  //  }
  // const promiseObj1 = add(5,6);
  // promiseObj1.then(result=>{
  //        console.log("result is "+result); //result is 11
  // })

  // In the above example add is an async function which returns the addition of two number
  // but implicitly it returns a promise object which can be resolved using then method and get the result.

  // Prepending anync to any function, it will return a promise, it will internally make it to return a promise.
  