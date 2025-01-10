let fs = require('fs');

let input = fs.readFileSync('./data/문제6_평균.txt')
          .toString().split('\n');
// 전체 시료 갯수 
let n = parseInt(input[0]);          

for(let i=1; i <= n; i++){
  let data = input[i].split(' ').map(Number);
  let m = data[0];
  let sum = 0;
  for(let j=1; j <= m; j++){
    sum += data[j];
  }
  // 총점계산
  console.log('총점 : ' + sum);
  // 평균계산
  let avg = sum / m;
  console.log('평균 : ' + avg);
  // 평균보다 큰 값의 수 저장 변수
  let cnt = 0;
  for(let k=1; k <= m; k++){
    if(data[k] > avg) cnt = cnt + 1;
  }
  // 평균 이상자 수의 비율
  let rate = ((cnt / m * 100).toFixed(3));
  console.log(rate + '%');
}