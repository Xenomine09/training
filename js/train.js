// const string = '   Welcome to the future   ';

// const wordsArr = string.trim().split(" ");
// // wordsArr.splice(0, 1);
// // wordsArr.splice(-1, 1);

// // console.log(wordsArr.join(" "));

// wordsArr.pop();
// wordsArr.shift();
// console.log(wordsArr.join(" "));

// const string = 'Welcome to the future';

// const reversedString = string.split("").reverse().join("");
// console.log(reversedString);

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     }
// }

// console.log(min);

const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

console.log("sort: ", langs.sort())

for (let i = 0; i < langs.length; i += 1){
    for (let k = i + 1; k < langs.length; k += 1){
        if (langs[i] > langs[k]) {
            const temp = langs[i];
            langs[i] = langs[k];
            langs[k] = temp;
        }
    }
}

console.log("Our:", langs)