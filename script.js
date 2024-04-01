// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get references to the HTML elements
const guessField = document.getElementById('guessField');
const result = document.getElementById('result');

let attempts = 0;

// Function to check the user's guess
function checkGuess() {
    const userGuess = parseInt(guessField.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        result.textContent = 'Please enter a valid number between 1 and 100';
    } else {
        if (userGuess === randomNumber) {
            result.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
            result.style.color = 'green';
            guessField.disabled = true;
        } else if (userGuess < randomNumber) {
            result.textContent = 'Too low! Try again.';
            result.style.color = 'red';
        } else {
            result.textContent = 'Too high! Try again.';
            result.style.color = 'red';
        }
    }
}
