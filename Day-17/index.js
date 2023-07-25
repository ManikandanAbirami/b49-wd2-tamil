// creatig promise with producer!

let promiseObj = new Promise((resolve, reject) => {
  console.log("Getting the product history from DB...");
  setTimeout(() => {
    resolve("6 months of purchased products!!!");
    reject("Error occurred!!!");
  }, 3000);
});

console.log(promiseObj);
