let promiseObj = new Promise((resolve, reject) => {
  console.log("Getting the product history from DB...");
  setTimeout(() => {
    // resolve("6 months of purchased products!!!");
    reject("Error occurred!!!");
  }, 3000);
});

//Consumer code
//way 1
// promiseObj.then(
//   (val) => {
//     //code to be executed when is resolved
//     console.log("Product history received ", val);
//   },
//   (err) => {
//     //code to be executed when is rejected
//     console.log("Error $$$$$$$$$$  ", err);
//   }
// );

//Way 2
promiseObj.then((val) => {
  //code to be executed when is resolved
  console.log("Product history received ", val);
});

promiseObj.catch((err) => {
  //code to be executed when is rejected
  console.log("Error $$$$$$$$$$  ", err);
});
