// let promiseObj = new Promise((resolve, reject) => {});

function asyncTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 1 completed!!!");
      //   reject("Task 1 rejected!!!");
    }, 1000);
  });
}

function asyncTask2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2 completed!!!");
      //   reject("Task 2 rejected!!!");
    }, 1500);
  });
}

function asyncTask3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3 completed!!!");
      //   reject("Task 3 rejected!!!");
    }, 3000);
  });
}

function asyncTask4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let a = 10;
      let b = 10;
      if (a - b === 1) {
        resolve("Task 4 completed!!!");
      } else {
        reject("Task 4 rejected!!!");
      }
    }, 3000);
  });
}

Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()])
  .then((results) => {
    console.log(results);
    console.log("All tasks completed!!");
  })
  .catch((err) => {
    console.error("Error: ", err);
  });
