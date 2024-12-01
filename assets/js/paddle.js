document.addEventListener("DOMContentLoaded", () => {
  console.log("Connected to main.js");

  // Get references to DOM elements
  const gameViewport = document.getElementById("game-viewport");
  const gameBounds = gameViewport.getBoundingClientRect();
  const paddle = document.getElementById("paddle");
  const paddleWidth = paddle.offsetWidth;

  let paddlePosition = (gameBounds.width - paddleWidth) / 2; // Center the paddle initially
  paddle.style.left = `${paddlePosition}px`;

  // Function to move the paddle
  function movePaddle(event) {
      console.log("Key pressed:", event.key); // Add this line
      const step = 20; // Number of pixels to move the paddle

      if (event.key === "ArrowLeft") {
          paddlePosition = Math.max(paddlePosition - step, 0); // Move left, but not beyond the left edge
      } else if (event.key === "ArrowRight") {
          paddlePosition = Math.min(paddlePosition + step, gameBounds.width - paddleWidth); // Move right, but not beyond the right edge
      }

      paddle.style.left = `${paddlePosition}px`;
  }

  // Add event listener for keydown event
  document.addEventListener("keydown", movePaddle);
});