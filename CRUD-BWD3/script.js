// Sample data to store initial level values
let data = [
  { name: "Manikandan", age: 32 },
  { name: "John", age: 29 },
];

// fucntion to display data in the table

function displayData() {
  const dataRows = document.getElementById("dataRows");
  dataRows.innerHTML = "";

  data.forEach((item, index) => {
    const row = `
    <tr>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>
    <button type="button" class="btn btn-info" data-mani="${index}">Edit</button>
    <button type="button" class="btn btn-danger"  data-mani="${index}">Delete</button>
    </td>
    </tr>
    `;

    dataRows.insertAdjacentHTML("beforeend", row);
  });
}

//Function to handle form submit
function handleFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);

  // Add data to the array
  data.push({ name, age });

  nameInput.value = "";
  ageInput.value = "";

  displayData();
}

function handleDeleteClick(event) {
  const index = event.target.getAttribute("data-mani");
  data.splice(index, 1);
  displayData();
}

function handleEditClick(event) {
  const index = event.target.getAttribute("data-mani");
  const record = data[index];

  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  nameInput.value = record.name;
  ageInput.value = record.age;

  data.splice(index, 1);
  displayData();
}

document
  .getElementById("crudForm")
  .addEventListener("submit", handleFormSubmit);

document.getElementById("dataRows").addEventListener("click", (event) => {
  //   alert(event.target.classList);
  if (event.target.classList.contains("btn-danger")) {
    handleDeleteClick(event);
  } else if (event.target.classList.contains("btn-info")) {
    handleEditClick(event);
  }
});

displayData();
