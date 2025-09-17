
var a = 2, b = 1;
var result1 = --a - --b + ++b + b-- + b; // 1      0      1      1

console.log(--a , --b , ++b , b-- , b); // Output: 3
console.log(result1); // Output: 3