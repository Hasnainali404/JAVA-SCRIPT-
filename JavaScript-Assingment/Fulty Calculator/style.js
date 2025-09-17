// Generate a random number between 0 and 1
let randomNumber = Math.random();
let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");

// Declare variables to hold the results
let additionResult;
let subtractionResult;
let multiplicationResult;
let divisionResult;

// Conditionally perform different calculations based on the random number
if (randomNumber < 0.9) {
    // Perform one set of calculations
    additionResult = a + b;
    subtractionResult = a - b;
    multiplicationResult = a * b;
    divisionResult = a / b;
} else {
    // Perform a different set of calculations
    additionResult = a - b;
    subtractionResult = a + b;
    multiplicationResult = a / b;
    divisionResult = a * b;
}

// Log the results to the console
alert("Addition Result:", additionResult);
alert("Subtraction Result:", subtractionResult);
alert("Multiplication Result:", multiplicationResult);
alert("Division Result:", divisionResult);