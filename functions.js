function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let num = randomNum(1, 20);
let numGuesses = 0;

function resetGuesses() {
  num = randomNum(1, 20);
  numGuesses = 0;
}

function makeGuess() {
  const guessInput = document.getElementById("guess");
  const guess = Number(guessInput.value);
  guessInput.value = "";
  const feedback = document.getElementById("feedback");
  const howClose = document.getElementById("howClose");

  numGuesses++;
  document.getElementById("num-guesses").innerHTML = numGuesses;

  if (guess === num) {
    feedback.innerHTML = "You guessed it in " + numGuesses + " attempts!";
    howClose.innerHTML = "";
    resetGuesses();
    document.getElementById("num-guesses").innerHTML = numGuesses;
  } else if (guess !== num && numGuesses <= 3) {
    feedback.innerHTML = "Oops, that's not it. Try again!";
  } else if (guess > num && numGuesses <= 10) {
    feedback.innerHTML =
      "I guess we aren't all gold medals.. Let me help you out a bit!";
    howClose.innerHTML = "Hint: try guessing a lower number";
  } else if (guess < num && numGuesses <= 10) {
    feedback.innerHTML =
      "I guess we aren't all gold medals.. Let me help you out a bit!";
    howClose.innerHTML = "Hint: try guessing higher";
  } else {
    feedback.innerHTML = "Hmm... ";
    howClose.innerHTML =
      "Alright, so I don't know how to say this. This might not be the game for you. You might want to try an easier game... ";
  }
}

const input = document.getElementById("guess");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
