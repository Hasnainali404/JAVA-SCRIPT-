/*
       1. Write a program to check whether the number is greater than 10 or not.
       */


// Cheack the number is greater than 10 or not

function MyFunction() {

    // Use prompt to take input from the user
    let num1 = prompt("Enter the number:");

    // If the number is greater than 10, display "The number is greater than 10"
    if (num1 > 10) {
        alert("The number is greater than 10");
    }

    // If the number is less than 10, display "The number is less than 10"
    else if (num1 == 10 && num1 < 10) {
        alert("The number is less than 10");
    }

    // If the number is not correct, display "The number is not correct"
    else {
        alert("The number is not correct");
    }

}



/*
2. Write a program to check whether the number is equle or not using !=.
*/

function MyFunction1() {

    // Use prompt to take input from the user
    let num2 = prompt("Enter the equal number to 8:");

    // Function to return the number
    function output(num2) {
        return num2;
    }

    // If the number is equal to 8, display "The number is equal to 8"
    if (num2 == 8) {
        alert("The " + output(num2) + " is equal to 8 ");
    }

    // If the number is not equal to 8, display "The number is not equal to 8"
    else if (num2 != 8) {
        alert("The " + output(num2) + " is not equal to 8 ");
    }

    // If the number is not defined, display "The number is not defined"
    else {
        alert("The number is not defind");
    }

}

/*
3. Write a program to check whether the number is positive, negative or zero.   
*/

function MyFunction2() {

    // Use prompt to take input from the user
    let num3 = prompt("Enter the number:");

    // If the number is positive, display "The number is positive"
    if (num3 > 0) {
        alert("The number is positive");
    }

    // If the number is negative, display "The number is negative"
    else if (num3 < 0) {
        alert("The number is negative");
    }

    // If the number is zero, display "The number is zero"
    else if (num3 == 0) {
        alert("The number is zero");
    }

    // If the number is not defined, display "The number is not defined"
    else {
        alert("The number is not defind");
    }

}

/*
4. Write a program to check the marks of a students.
*/

function MyFunction3() {

    // Use prompt to take input from the user
    let marks = prompt("Enter the marks:");

    // If the marks are greater than or equal to 90, display "A+"
    if (marks >= 90) {
        alert("A+");
    }

    // If the marks are greater than or equal to 80, display "A"
    else if (marks >= 80) {
        alert("A");
    }

    // If the marks are greater than or equal to 70, display "B+"
    else if (marks >= 70) {
        alert("B+");
    }

    // If the marks are greater than or equal to 60, display "B"
    else if (marks >= 60) {
        alert("B");
    }

    // If the marks are greater than or equal to 50, display "C+"
    else if (marks >= 50) {
        alert("C+");
    }

    // If the marks are greater than or equal to 40, display "C"
    else if (marks >= 40) {
        alert("C");
    }

    // If the marks are less than 40, display "Fail"
    else if (marks < 40) {
        alert("Fail");
    }

    // If the marks are not defined, display "The marks is not defined"
    else {
        alert("The marks is not defind");
    }

}


/*
5. Write a program to check the number is divisiable by both 2 and 3 using &&.
*/


function MyFunction4() {

    // Use prompt to take input from the user
    let num4 = prompt("Enter the number:");

    // If the number is divisible by both 2 and 3, display "The number is divisible by both 2 and 3"
    if (num4 % 2 == 0 && num4 % 3 == 0) {
        alert("The number is divisible by both 2 and 3");
    }

    // If the number is not divisible by both 2 and 3, display "The number is not divisible by both 2 and 3"
    else {
        alert("The number is not divisible by both 2 and 3");
    }

}

/*
6. Write a program that chack if the person is eligiable to vote using bollen.
*/


function MyFunction5() {

    // Define age and citizen variables
    let age = prompt("Enter your age:");
    // Define citizen as a boolean variable
    let citizen = true;

    // Check if the person is eligible to vote
    if (age >= 18 && citizen === true) {
        alert("Eligible to vote");
    }

    // If the person is not eligible to vote
    else {
        alert("Not eligible to vote");
    }

}

/*
7. Write a program that checks if a number is between 50 and 100 (inclusive).
- Input: var n = 75;
- Output: "Number is in range"
*/

function MyFunction6() {

    // Use prompt to take input from the user
    let n = prompt("Enter the number:");

    // Check if the number is between 50 and 100 (inclusive)
    if (n >= 50 && n <= 100) {
        alert("Number is in range");
    }

    // If the number is not between 50 and 100 (inclusive)
    else {
        alert("Number is out of range");
    }

}


/*
8. Write a program to check if a student has passed:
- If marks >= 40 → "Pass"
- Else → "Fail"
- Extra Condition: If marks >= 90 → "Pass with Distinction"
*/

function MyFunction7() {
    // Use prompt to take input from the user
    let marks = prompt("Enter the marks:");

    // Check if the student has passed with distinction
    if (marks >= 90) {
        alert("Pass with Distinction");
    }

    // Check if the student has passed
    else if (marks >= 40) {
        alert("Pass");
    }

    // If the student has failed
    else {
        alert("Fail");
    }
}


/*
9. Write a calculator using if else if which performs addition, subtraction, multiplication, and division
based on operator variable.
- Example:
var num1 = 10, num2 = 5, op = "*";
// Output → 50
*/


function MyFunction8() {
    // Use prompt to take input from the user
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let op = prompt("Enter the operator (+, -, *, /):");

    // Perform the operation based on the operator
    if (op === "+") {
        alert("The result is: " + (num1 + num2));
    }
    else if (op === "-") {
        alert("The result is: " + (num1 - num2));
    }
    else if (op === "*") {
        alert("The result is: " + (num1 * num2));
    }
    else if (op === "/") {
        // Check if the second number is not zero to avoid division by zero
        if (num2 !== 0) {
            alert("The result is: " + (num1 / num2));
        } else {
            alert("Error: Division by zero is not allowed.");
        }
    }

    else {
        alert("Invalid operator");
    }
}

/*
10. Write a program that checks if a number is odd OR greater than 100.
- Input: var n = 101;
- Output: "Condition True"
*/

function MyFunction9() {
    // Use prompt to take input from the user
    let n = prompt("Enter the number:");

    // Check if the number is odd OR greater than 100
    if (n % 2 !== 0 || n > 100) {
        alert("Condition True");
    }   

    // If the number is not odd OR greater than 100
    else {
        alert("Condition False");
    }
}




















