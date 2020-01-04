const { getMappedDays, calculateDayMatrix } = require('./src/digest/helpers.debug');
const QUERY_DAYS_CASE_0 = [
  '1:0,2:1,1:2,1:3',
  '2:0,2:1,1:3',
  '5:0',
  '4:2,1:3',
  '2:5,1:1,1:4,1:3',
  '2:5,1:1,1:4,1:3',
  '2:5,1:1,1:4,1:3',
];
// const OK = ['1:0,2:1,1:3,1:2'];
// const OK = ['1:0,2:1,1:2,1:3']
// const OK = ['2:1,6:2,0:3,1:4,1:5']
const OK = ['1:1,4:2,0:3,2:4,1:5']

console.log(calculateDayMatrix(OK[0].split(',')))
console.log(QUERY_DAYS_CASE_0);

// getMappedDays(QUERY_DAYS_CASE_0)
