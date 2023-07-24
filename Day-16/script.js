console.log("Let's start the timer!!");

setTimeout(() => {
  console.log("Timer 1");

  setTimeout(() => {
    console.log("Timer 2");

    setTimeout(() => {
      console.log("Timer 3");
      console.log("I m done!!!");
    }, 2000);
  }, 3000);
}, 4000);
