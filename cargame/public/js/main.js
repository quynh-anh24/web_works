document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector(".start");
  const restartButton = document.querySelector(".restart");
  const light1 = document.querySelector(".light1");
  const light2 = document.querySelector(".light2");
  const light3 = document.querySelector(".light3");
  const car1 = document.querySelector(".xe1");
  const car2 = document.querySelector(".xe2");
  const fuel1 = document.querySelector(".fuel1");
  const fuel2 = document.querySelector(".fuel2");
  const end = document.querySelector(".end");
  const warmUpSound = document.getElementById("warmUpSound");


  let gameStarted = false;

  function getRandomSpeed() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function startGame() {
    if (!gameStarted) {
      gameStarted = true;

      // Play warm-up sound 
      warmUpSound.play();

      // Reset the width of fuel elements   
      fuel1.style.width = "80px";
      fuel2.style.width = "80px";

      // Trigger light animations
      animateLights(() => {


        // Get random speeds for each car
        const speed1 = getRandomSpeed();
        const speed2 = getRandomSpeed();

        // Move cars and check positions
        moveCar(car1, fuel1, speed1);
        moveCar(car2, fuel2, speed2);

        // Add shaking effect to cars
        car1.classList.add("shaking");
        car2.classList.add("shaking");
      });
    }
  }

  function animateLights(callback) {
    // Show red color after 1s
    setTimeout(() => {
      light1.style.backgroundColor = "red";
      // Show yellow color after 1s
      setTimeout(() => {
        light2.style.backgroundColor = "yellow";
        // Show green color after 1s
        setTimeout(() => {
          light3.style.backgroundColor = "green";
          // Call the callback function to start moving cars
          if (typeof callback === "function") {
            callback();
          }
        }, 1000);
      }, 1000);
    }, 1000);
  }

  function moveCar(car, fuel, speed) {
    const intervalId = setInterval(function () {
      const currentPosition = car.offsetLeft;
      const newPosition = currentPosition + speed;

      car.style.left = newPosition + "px";

      // Update the width of the fuel element based on speed
      const newWidth = 80 - (speed / 10) * 80 + "px";

      // Apply the transition effect to the fuel width
      fuel.style.transition = "width 2s ease-in-out";
      fuel.style.width = newWidth;

      if (newPosition >= end.offsetLeft) {
        clearInterval(intervalId);
        finishGame(car, fuel);
      }
    }, 20);
  }

  function finishGame(winningCar, fuel) {
    gameStarted = false;


    car1.style.transition = "none";
    car2.style.transition = "none";

    // Remove shaking effect from cars
    car1.classList.remove("shaking");
    car2.classList.remove("shaking");

    if (winningCar === car1 && car2.offsetLeft >= end.offsetLeft) {
      // Both cars reached the finish line simultaneously
      alert("Hòa! Thật là một trận đấu kịch tính!");
    } else {
      // Only one car reached the finish line
      alert(`${winningCar.className} chiến thắng!`);
    }



    car1.style.left = "0";
    car2.style.left = "0";

    // Reset the width of fuel elements
    fuel1.style.width = "80px";
    fuel2.style.width = "80px";

    // Clear the transition effect after a delay
    setTimeout(function () {
      car1.style.transition = "left 2s linear";
      car2.style.transition = "left 2s linear";
      fuel.style.transition = "none";
    }, 100);
  }

  function restartGame() {
    // Reset the game state
    light1.style.backgroundColor = "";
    light2.style.backgroundColor = "";
    light3.style.backgroundColor = "";
    car1.style.left = "0";
    car2.style.left = "0";


    // Mute the sounds when finding the winner
    warmUpSound.pause();
    warmUpSound.currentTime = 0;

    // Remove shaking effect from cars
    car1.classList.remove("shaking");
    car2.classList.remove("shaking");

    // Enable the start button
    gameStarted = false;

    // Reset the width of fuel elements
    fuel1.style.width = "80px";
    fuel2.style.width = "80px";
  }

  startButton.addEventListener("click", startGame);
  restartButton.addEventListener("click", restartGame);
});
function finishGame(winningCar, fuel) {
  gameStarted = false;

  car1.style.transition = "none";
  car2.style.transition = "none";

  if (winningCar === car1 && car2.offsetLeft >= end.offsetLeft) {
    // Both cars reached the finish line simultaneously
    alert("Hòa! Thật là một trận đấu kịch tính!");
  } else {
    // Only one car reached the finish line
    alert(`${winningCar.className} chiến thắng!`);
  }

  car1.style.left = "0";
  car2.style.left = "0";

  // Reset the width of fuel elements
  fuel1.style.width = "80px";
  fuel2.style.width = "80px";

  // Clear the transition effect after a delay
  setTimeout(function () {
    car1.style.transition = "left 2s linear";
    car2.style.transition = "left 2s linear";
    fuel.style.transition = "none";
  }, 100);
}