/**
 * Logs all integers from 20 up to, but not including, 50 to the console.
 *
 * Iterates using a for loop, starting at 20 and incrementing by 1 each time,
 * logging the current value of the loop variable `i` to the console on each iteration.
 */

// for (let i = 20; i < 50; i++) {
//    console.log(i);

// }

// for (let i = 100; i > 0; i--) {
//    console.log(i);
// }

// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// for (let i = 0; i < fruits.length; i++) {
//    console.log(fruits[i]);
// }

function handleClick() {
    let promtValue = document.getElementById("myButtonText").value;
    let reversedValue = "";

    for (let i = promtValue.length - 1; i >= 0; i--) {
        reversedValue += promtValue[i];
    }

    console.log(reversedValue);
    document.getElementById("myButton").innerText = reversedValue;

    // Check if the input string is a palindrome
    const normalize = s => s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const a = normalize(promtValue);
    const b = normalize(reversedValue);
    const message = a === b ? "It's a palindrome!" : "It's not a palindrome.";
    console.log(message);
    document.getElementById("apper").innerText = message;
}



