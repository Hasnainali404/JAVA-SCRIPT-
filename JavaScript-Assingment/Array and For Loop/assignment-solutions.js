//Question 01
// Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
let q1Output = fruits.map((fruit, i) => `${i + 1}. ${fruit}`).join("\n");
if (document.getElementById("q1")) document.getElementById("q1").textContent = q1Output;


// // Question 02
// // Generate the following series in your browser. See example output.
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



// Question 02: Series Generation
let counting = Array.from({ length: 15 }, (_, i) => i + 1).join(", ");
let reverseCounting = Array.from({ length: 10 }, (_, i) => 10 - i).join(", ");
let evenNumbers = Array.from({ length: 11 }, (_, i) => i * 2).join(", ");
let oddNumbers = Array.from({ length: 10 }, (_, i) => i * 2 + 1).join(", ");
let series = Array.from({ length: 10 }, (_, i) => (i + 1) * 2 + "k").join(", ");
if (document.getElementById("q2a")) document.getElementById("q2a").textContent = counting;
if (document.getElementById("q2b")) document.getElementById("q2b").textContent = reverseCounting;
if (document.getElementById("q2c")) document.getElementById("q2c").textContent = evenNumbers;
if (document.getElementById("q2d")) document.getElementById("q2d").textContent = oddNumbers;
if (document.getElementById("q2e")) document.getElementById("q2e").textContent = series;


// // Question 03
// // You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// // Write a program to enable “search by user input” in an array.
// // After searching, prompt the user whether the given item is found in the list or not.



// Question 03: Search in Array (UI based)
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
window.searchItem = function () {
    const input = document.getElementById("searchInput").value.toLowerCase();
    let found = false;
    for (let i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === input) {
            found = true;
            break;
        }
    }
    if (found) {
        document.getElementById("q3").innerHTML = `Yes, <b>${input}</b> is available in the list.`;
    } else {
        document.getElementById("q3").innerHTML = `Sorry, <b>${input}</b> is not found in the list.`;
    }
}


// // Question 04
// // Write a program to identify the largest number in the given array.
// // A = [24, 53, 78, 91, 12].


// Question 04: Largest Number in Array
let A1 = [24, 53, 78, 91, 12, 105, 67, 89, 34];
let largest = A1[0];
for (let i = 1; i < A1.length; i++) {
    if (A1[i] > largest) {
        largest = A1[i];
    }
}
if (document.getElementById("q4")) document.getElementById("q4").textContent = `Array: [${A1.join(", ")}]\nLargest number is ${largest}`;



// // Question 05
// // Write a program to identify the smallest number in the given array.
// // A = [24, 53, 78, 91, 12]


// Question 05: Smallest Number in Array
let A2 = [24, 53, 78, 91, 12, 5, 67, 89, 34];
let smallest = A2[0];
for (let i = 1; i < A2.length; i++) {
    if (A2[i] < smallest) {
        smallest = A2[i];
    }
}
if (document.getElementById("q5")) document.getElementById("q5").textContent = `Array: [${A2.join(", ")}]\nSmallest number is ${smallest}`;


// // Question 06
// // Write a program to print multiples of 5 ranging 1 to 100.
// // Example: Print numbers like 5, 10, 15, ..., 100 using a loop.



// Question 06: Multiples of 5 (1 to 100)
let multiplesOf5 = [];
for (let i = 5; i <= 100; i += 5) {
    multiplesOf5.push(i);
}
if (document.getElementById("q6")) document.getElementById("q6").textContent = multiplesOf5.join(", ");


// // Question 07
// // Print multiplication table.
// // Ask user for a number (e.g. 7) and print its table up to 10.


// Question 07: Multiplication Table (UI based)
window.printTable = function () {
    const num = parseInt(document.getElementById("tableInput").value);
    if (isNaN(num)) {
        document.getElementById("q7").textContent = "Please enter a valid number.";
        return;
    }
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${num} x ${i} = ${num * i}\n`;
    }
    document.getElementById("q7").textContent = table;
}


// Question 08
// Pattern printing (stars ■)
// Use nested loops to print this pattern:
// Output
// *
// **
// ***
// ****
// *****



// Question 08: Pattern Printing (Stars)
let pattern = "";
for (let i = 1; i <= 5; i++) {
    pattern += "*".repeat(i) + "\n";
}
if (document.getElementById("q8")) document.getElementById("q8").textContent = pattern;






