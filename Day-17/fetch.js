const url = "https://restcountries.com/v3.1/all";

fetch(url)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      console.log("Network response was not ok.");
    }
  })
  .then((data) => {
    console.log("DATA: ", data);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
