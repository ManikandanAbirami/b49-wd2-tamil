function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      resolve(data);
      // reject("no data");
    }, 1000);
  });
}

async function processDataWithAsyncAwait() {
  try {
    const data = await fetchDataWithPromise();
    console.log("Data received:", data);
  } catch (err) {
    console.log("Error: ", err);
  }
}

processDataWithAsyncAwait();
