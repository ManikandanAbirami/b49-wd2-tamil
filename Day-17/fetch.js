async function fetchData() {
  const url = "https://restcountries.com/v3.1/all"; //webAPI URL
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data fetched successfully!!", data);
  } catch (err) {
    console.log("Error fetching data: ", err);
  }
}

fetchData();

// fetch(url)
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       console.log("Network response was not ok.");
//     }
//   })
//   .then((data) => {
//     console.log("DATA: ", data);
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });
