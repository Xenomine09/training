# training

задача 5
const string = ' Welcome to the future ';

const wordsArr = string.trim().split(" ");
// wordsArr.splice(0, 1);
// wordsArr.splice(-1, 1);

// console.log(wordsArr.join(" "));

wordsArr.pop();
wordsArr.shift();
console.log(wordsArr.join(" "));

задача 6

const string = 'Welcome to the future';

const reversedString = string.split("").reverse().join("");
console.log(reversedString);

задача 8

const numbers = [2, 17, 94, 1, 23, 37];
let min = numbers[0];

for (const number of numbers) {
if (number < min) {
min = number;
}
}

console.log(min);
