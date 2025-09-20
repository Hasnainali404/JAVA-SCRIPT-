// Question 01
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
let q1Output = "";
for (let i = 0; i < fruits.length; i++) {
    q1Output += (i + 1) + ". " + fruits[i] + "<br>";
}
document.getElementById("q1").innerHTML = q1Output;

// Question 02
// a. Counting
let count = [];
for (let i = 1; i <= 15; i++) count.push(i);
document.getElementById("q2a").innerHTML = "<b>Counting:</b> " + count.join(", ");
// b. Reverse counting
let revCount = [];
for (let i = 10; i >= 1; i--) revCount.push(i);
document.getElementById("q2b").innerHTML = "<b>Reverse Counting:</b> " + revCount.join(", ");
// c. Even
let even = [];
for (let i = 0; i <= 20; i += 2) even.push(i);
document.getElementById("q2c").innerHTML = "<b>Even:</b> " + even.join(", ");
// d. Odd
let odd = [];
for (let i = 1; i < 20; i += 2) odd.push(i);
document.getElementById("q2d").innerHTML = "<b>Odd:</b> " + odd.join(", ");
// e. Series
let series = [];
for (let i = 2; i <= 20; i += 2) series.push(i + "k");
document.getElementById("q2e").innerHTML = "<b>Series:</b> " + series.join(", ");

// Question 03
const bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
function searchItem() {
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
const A = [24, 53, 78, 91, 12];
let largest = A[0];
for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) largest = A[i];
}
document.getElementById("q4").innerHTML = `Array: [${A.join(", ")}]<br>Largest number is <b>${largest}</b>`;

// Question 05
let smallest = A[0];
for (let i = 1; i < A.length; i++) {
    if (A[i] < smallest) smallest = A[i];
}
document.getElementById("q5").innerHTML = `Array: [${A.join(", ")}]<br>Smallest number is <b>${smallest}</b>`;

// Question 06
let multiples = [];
for (let i = 5; i <= 100; i += 5) multiples.push(i);
document.getElementById("q6").innerHTML = multiples.join(", ");

// Question 07
function printTable() {
    const num = parseInt(document.getElementById("tableInput").value);
    if (isNaN(num)) {
        document.getElementById("q7").innerHTML = "Please enter a valid number.";
        return;
    }
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${num} x ${i} = ${num * i}<br>`;
    }
    document.getElementById("q7").innerHTML = table;
}

// Question 08
let pattern = "";
for (let i = 1; i <= 5; i++) {
    pattern += "*".repeat(i) + "<br>";
}
document.getElementById("q8").innerHTML = pattern;
