function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      //   resolve(data);
      reject("no data");
    }, 1000);
  });
}

fetchDataWithPromise()
  .then((val) => {
    console.log("Data received:", val);
  })
  .catch((err) => {
    console.log("Error occurred: ", err);
  });
