console.log("Hello World!");


var num1 = (2 * 3) + (4 * 2); // 6 + 8 // 14
var num2 = (5 + 3) * 2; // 8 * 2 // 16
var num3 = (10 - 4) + (2 * 3); // 6 + 6 // 12
var num4 = (6 * 3) - (8 / 2); // 18 - 4 // 14
var num5 = (12 / 3) + (5 * 2); // 4 + 10 // 14
var num6 = (7 + 3) * (8 - 5); // 10 * 3 // 30
var num7 = ((5 + 3) * 2) - (4 * 3);  // 8 * 2 - 12 // 16 - 12 // 4
var num8 = (10 / (2 + 3)) + (6 * 2); // 2 + 12 // 14
var num9 = ((8 - 2) * (5 + 1)) / 3; // 6 * 6 / 3 // 36 / 3 // 12


// let num = 100;

// for (let i = 0; i < num; i++) {
//     console.log(i);
// }



var a = 2, b = 1;
var result1 = --a - --b + ++b + b--;
// 1 - 0 + 1 + 1
// 1 - 0 + 1 + 1 = 3
console.log(result1);

var a = 5, b = 3;
var result2 = --a + ++b - b-- + a++;
// 4 + 4 - 3 + 5
// 4 + 4 - 3 + 5 = 8
console.log(result2);

var x = 4, y = 2;
var result3 = x++ + --y + ++x - y--;
// 4 + 1 + 5 - 2
// 4 + 1 + 5 - 2 = 10
console.log(result3);

var m = 7, n = 2;
var result4 = --m - n++ + ++m + --n;
// 6 - 2 + 8 + 1
// 6 - 2 + 8 + 1 = 13
console.log(result4);

var p = 3, q = 5;
var result5 = p-- + ++q - --p + q++;
// 3 + 6 - 2 + 5
// 3 + 6 - 2 + 5 = 12
console.log(result5);