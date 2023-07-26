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
      reject("Task 3 rejected!!!");
    }, 3000);
  });
}

function asyncTask4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 4 completed!!!");
      // reject("Task 3 rejected!!!");
    }, 3000);
  });
}

asyncTask1()
  .then((val) => {
    console.log(val);
    return asyncTask2();
  })
  .then((val) => {
    console.log(val);
    return asyncTask3();
  })
  .then((val) => {
    console.log(val);
    console.log("All tasks completed!!!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
