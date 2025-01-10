let fs = require('fs');

let input = fs.readFileSync('./data/문제3_시험성적.txt')
          .toString().split('\n');
input = input[0].split(' ').map(Number);
console.log(input);
let result;
if(input >= 90) {
  result = "A";
} else if (input >= 80) {
  result = "B";
} else if (input >= 70) {
  result = "C";
} else if (input >= 60) {
  result = "D";
} else result = "F";
console.log(result);
