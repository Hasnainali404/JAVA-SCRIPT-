// 1. Create an empty array. Use push method to add 3 fruits into it. Print the array.
const fruits = [];
fruits.push("apple");
fruits.push("banana");
fruits.push("orange");
console.log("1. Array after pushing 3 fruits:", fruits);

// 2. Use pop method to remove the last element from the array of fruits. Print the updated array.
fruits.pop();
console.log("2. Array after popping the last element:", fruits);

// 3. Use shift method to remove the first element from the array of fruits. Print the updated array.
fruits.shift(); // Corrected: removed the argument '1'
console.log("3. Array after shifting the first element:", fruits);

// 4. Use unshift method to add a new fruit at the start of the array. Print the updated array.
fruits.unshift("mango");
console.log("4. Array after unshifting a new fruit:", fruits);

// 5. Use slice method to copy the first 2 elements of the array into a new array. Print the new array.
const newFruits = fruits.slice(0, 2);
console.log("5. New array with first 2 elements:", newFruits);

// 6. Use splice method to remove 1 element from the middle of the array. Print the updated array.
// At this point, fruits array should have 2 elements, so we'll remove the element at index 1
fruits.splice(1, 1);
console.log("6. Array after removing middle element:", fruits);

// 7. Use includes method to check if 'apple' is present in the array. Print the result (true/false).
const hasApple = fruits.includes("apple");
console.log("7. Does the array include 'apple'?:", hasApple);