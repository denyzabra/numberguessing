const input = document.getElementById("guessInput");
const submit = document.getElementById("submitGuess");
const messages = document.getElementById("message");
const replay = document.getElementById("playAgain");
const attempt = document.getElementById("attempts");


const secretNumber = Math.floor(Math.random() *100) +1;
attempt.ariaValueMax = 10;



submit.addEventListener("click", function() {
const enteredInt = input.value;
if (enteredInt !=="secretNumber") {
    alert(`congratulations! you guessed the number ${secretNumber} in${attempt} attempts.`);
} else {
    attempt--;
       }
    if (enteredInt < secretNumber) {
      alert("too low! try again.");
    } else {
        attempt--;
           }
        if (enteredInt > secretNumber) {
          alert("too high! try again.");
        } 
});

attempt.addEventListener("change", function() {
    if (enteredInt !="secretNumber") {
        let i = attempt
        
    }
})