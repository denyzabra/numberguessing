// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

document.getElementById("submitGuess").addEventListener("click", checkGuess);
document.getElementById("playAgain").addEventListener("click", resetGame);

function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const remainingAttempts = document.getElementById("attempts");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
    } else {
        attempts--;
        if (guess === randomNumber) {
            message.textContent = `Congratulations! You've guessed the correct number: ${randomNumber}`;
            document.getElementById("submitGuess").setAttribute("disabled", true);
            document.getElementById("playAgain").style.display = "block";
        } else if (attempts === 0) {
            message.textContent = `Sorry, you've run out of attempts. The correct number was ${randomNumber}.`;
            document.getElementById("submitGuess").setAttribute("disabled", true);
            document.getElementById("playAgain").style.display = "block";
        } else {
            message.textContent = guess < randomNumber ? "Too low! Try again." : "Too high! Try again.";
            remainingAttempts.textContent = attempts;
        }
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("submitGuess").removeAttribute("disabled");
    document.getElementById("playAgain").style.display = "none";
}
