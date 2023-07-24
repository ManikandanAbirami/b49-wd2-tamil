function readBook(callback) {
  console.log("Let's start reading the book...");
  setTimeout(function () {
    console.log("Finished reading the book!!");
    callback();
  }, 2000);
}

function playGames(callback) {
  console.log("Playing games....");
  setTimeout(function () {
    console.log("Finished playing games!!");
    callback();
  }, 1500);
}

function afterReading() {
  console.log("Great job! Time to play games now!");
  playGames(afterPlaying);
}

function afterPlaying() {
  console.log("I m done, read book and played games!!!");
}

console.log("Let's get some tasks done!!");

readBook(afterReading);

console.log("Doing other things while waiting for the tasks to finish....");
