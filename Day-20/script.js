//Call back
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    callback(data);
  }, 1000);
}

function processDataWithCallback(data) {
  console.log("Data received:", data);
}

fetchDataWithCallback(processDataWithCallback);
