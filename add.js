let favNumber = 21; // Replace with your actual favorite number

let guess;

while (true) {
  guess = parseInt(prompt("Guess my favorite number:"));

  if (guess === 21) {
    console.log("You guessed it correctly!");
    break;
  } else if (guess > 50) {
    console.log("Your guess is too high.");
  } else if (guess > 5) {
    console.log("Your guess is too low.");
  
