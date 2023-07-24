console.log("Let's start the timer!!");

setTimeout(() => {
  console.log("Timer 1");

  setTimeout(() => {
    console.log("Timer 2");

    setTimeout(() => {
      console.log("Timer 3");
      console.log("Happt Independenca Day!!!");
    }, 4000);
  }, 3000);
}, 2000);
