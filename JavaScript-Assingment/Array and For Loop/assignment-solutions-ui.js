// UI logic for displaying all questions and answers

// Question 01
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
let q1Output = fruits.map((fruit, i) => `${i + 1}. ${fruit}`).join("\n");
document.getElementById("q1").textContent = q1Output;

// Question 02
document.getElementById("q2a").textContent = Array.from({ length: 15 }, (_, i) => i + 1).join(", ");
document.getElementById("q2b").textContent = Array.from({ length: 10 }, (_, i) => 10 - i).join(", ");
document.getElementById("q2c").textContent = Array.from({ length: 11 }, (_, i) => i * 2).join(", ");
document.getElementById("q2d").textContent = Array.from({ length: 10 }, (_, i) => i * 2 + 1).join(", ");
document.getElementById("q2e").textContent = Array.from({ length: 10 }, (_, i) => (i + 1) * 2 + "k").join(", ");

// Question 03
const bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
window.searchItem = function () {
    const input = document.getElementById("searchInput").value.toLowerCase();
    let found = false;
    for (let i = 0; i < bakery.length; i++) {
        if (bakery[i].toLowerCase() === input) {
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

// Question 04
const A1 = [24, 53, 78, 91, 12];
let largest = A1[0];
for (let i = 1; i < A1.length; i++) {
    if (A1[i] > largest) largest = A1[i];
}
document.getElementById("q4").textContent = `Array: [${A1.join(", ")}]\nLargest number is ${largest}`;

// Question 05
let smallest = A1[0];
for (let i = 1; i < A1.length; i++) {
    if (A1[i] < smallest) smallest = A1[i];
}
document.getElementById("q5").textContent = `Array: [${A1.join(", ")}]\nSmallest number is ${smallest}`;

// Question 06
let multiples = [];
for (let i = 5; i <= 100; i += 5) multiples.push(i);
document.getElementById("q6").textContent = multiples.join(", ");

// Question 07
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
let pattern = "";
for (let i = 1; i <= 5; i++) {
    pattern += "*".repeat(i) + "\n";
}
document.getElementById("q8").textContent = pattern;
