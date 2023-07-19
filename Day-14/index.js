const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// setTimeout(() => {
//   window.scrollBy(0, 200);
// }, 3000);

setInterval(() => {
  window.scrollBy(0, 100);
}, 4000);

console.log("Window width: ", windowWidth);
console.log("Window height: ", windowHeight);

// window.open("https://www.guvi.in/", "_blank");
// window.close();
console.log("Current URL: ", window.location.href);

const name = prompt("Please enter your name: ");
console.log("User entered: ", name);
alert("User entered the name, pls check the console.");

const result = confirm("Are you sure you want to delete this?");
if (result) {
  console.log("Yes, goahead and delete the item.");
} else {
  console.log("No, pls wait!!!");
}
