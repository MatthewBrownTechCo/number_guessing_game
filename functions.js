function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let num = randomNum(1, 50);
let numGuesses = 0;

function resetGuesses() {
  num = randomNum(1, 50);
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
    feedback.innerHTML = "You guessed it!";
    howClose.innerHTML = "";
    resetGuesses();
  } else if (guess !== num && numGuesses <= 3) {
    feedback.innerHTML = "Oops, that's not it. Try again!";
  } else if (guess > num && numGuesses <= 10) {
    feedback.innerHTML =
      "Wow, you aren't very good at this... Let me try giving you a hint!";
    howClose.innerHTML = "Hint: try guessing lower";
  } else if (guess < num && numGuesses <= 10) {
    feedback.innerHTML =
      "Wow, you aren't very good at this... Let me try giving you a hint!";
    howClose.innerHTML = "Hint: try guessing higher";
  } else {
    feedback.innerHTML = "Bro...";
    howClose.innerHTML =
      "You are clearly trolling me or just dumb. I'm not indulging. Keep guessing if you want... or don't. I don't care. Goodbye :)";
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
