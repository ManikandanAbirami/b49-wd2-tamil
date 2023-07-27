function getToy() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const toy = "Teddy Bear";
      resolve(toy);
      //   reject("No Teddy!!");
    }, 2000);
  });
}

function playWithToys() {
  console.log("Let's play with cars and blocks!!!");
  getToy()
    .then((val) => {
      console.log("Yoy! I got a", val, "to play with!");
      console.log("Now i can continue playing with other toys!!!");
    })
    .catch((err) => {
      console.error("Oops, something went wrong: ", err);
    });
}

async function playWithToys() {
  console.log("Let's play with cars and blocks!!!");

  try {
    const toy = await getToy();
    console.log("Yoy! I got a", toy, "to play with!");
  } catch (err) {
    console.error("Oops, something went wrong: ", err);
  }
  console.log("Now i can continue playing with other toys!!!");
}

playWithToys();

// function sub(a, b) {
//   try {
//     if (b > a) {
//       throw new Error("B is greater than A, pls check the input!!!");
//     }
//     const result = a - b;
//     console.log(result);
//   } catch (err) {
//     console.error("An error occured:", err.message);
//   }
// }

// sub(12, 15);
