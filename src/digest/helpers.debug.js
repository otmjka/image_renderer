// import fs from 'fs';
// import path from 'path';

const path = require('path');

const {
  COLOR_MAPPING,
  DEFAULT_DAYS,
  PROGRESS_BAR,
  WEEK_DIGEST_TEMPLATE,
  WEEK_DIGEST_TEMPLATE_COUNTER,
} = require('./enums.debug');

function readTemplate() {
  const filepath = path.join(__dirname, WEEK_DIGEST_TEMPLATE);
  let str;
  try {
    str = fs.readFileSync(filepath, 'utf8');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    str = 'error';
  }
  return str;
}

function readTemplateCounter() {
  const filepath = path.join(__dirname, WEEK_DIGEST_TEMPLATE_COUNTER);
  let str;
  try {
    str = fs.readFileSync(filepath, 'utf8');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    str = 'error';
  }
  return str;
}

function readTemplateProgress() {
  const filepath = path.join(__dirname, PROGRESS_BAR);
  let str;
  try {
    str = fs.readFileSync(filepath, 'utf8');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    str = 'error';
  }
  return str;
}

function makeColorList(amountRaw, colorRaw) {
  const amount = parseInt(amountRaw, 10);
  const color = parseInt(colorRaw, 10);
  if (!amount || (color !== 0 && !color)) {
    return [];
  }
  // eslint-disable-next-line arrow-parens
  const getColor = (c) => COLOR_MAPPING[c];
  const result = [];
  let i = 0;
  while (i < amount) {
    result.push(getColor(color));
    i += 1;
  }
  return result;
}
/*
// [1:2, 1:2, 1:2, 1:2] => [4:2]
type AmountColonColorType = Array<AmountColonColorString>
type AmountColonColorString = String // 1:2

calculateDayMatrix(amountColonColor: AmountColonColorType) => Array<DayRecord>

interface DayRecord {
  color: Color,
  coef: Number
}

*/
function calculateDayMatrix(amountColonColorArray) {
  const groupedByColor = groupByColor(amountColonColorArray);
  const totalCellsAmount /*: number */ = getTotalCellsAmount(groupedByColor);
  const coef = 100 / totalCellsAmount;
  amountColonColorArray.map((amoutColonColor, n) => {
    const [amount, colorIndex] = getAmountColor(amoutColonColor);
    result = {color: COLOR_MAPPING[colorIndex], coef: coef * amount}
    return result
  });
  console.log(totalCellsAmount);
}

function getTotalCellsAmount(colorsAmountDict) {
  let acc = 0;
  for (let color in colorsAmountDict) {
    acc += colorsAmountDict[color];
  }

  return acc;
}
function getAmountColor(amountColonColorStr) {
  const [amountStr, colorStr] = amountColonColorStr.split(':');
  const amount = parseInt(amountStr, 10);
  const color = parseInt(colorStr, 10);
  return [amount, color];
}
function groupByColor(amountColonColorArray) {
  // group by color
  const reducer = (acc, currentValue) => {
    console.log(acc, currentValue);
    const [amount, color] = getAmountColor(currentValue);
    acc[color] = (acc[color] || 0) + amount;
    return acc;
  };
  const dayColors = amountColonColorArray.reduce(reducer, {});
  return dayColors;
}

function calculateDayMatrix1(amountColonColor) {
  const dayColorsReducer = (acc, currentValue) => {
    const [amount, color] = currentValue.split(':');
    const colors = makeColorList(amount, color);
    let summaryOfCoef = 0;
    // eslint-disable-next-line operator-assignment
    amountColonColor.forEach((index) => {
      summaryOfCoef = summaryOfCoef + Number(index[0]);
    });
    const coef = 100 / summaryOfCoef;
    const oldColorArray = [...acc, ...colors];
    const newColorArray = [];
    oldColorArray.forEach((index, i) => {
      if (amountColonColor[i]) {
        const curAmount = parseInt(amountColonColor[i].split(':')[0], 10);
        if (!Number.isInteger(curAmount)) {
          throw new Error('should be int');
        }
        newColorArray.push({
          color: index.color ? index.color : index,
          coef: curAmount * coef,
        });
      }
    });
    if (amountColonColor.length === newColorArray.length) {
      return newColorArray;
    }
    return [...acc, ...colors];
  };
  const init = [];
  const dayColors = amountColonColor.reduce(dayColorsReducer, init);
  return dayColors;
}

// function isValid(dayMatrix) {
//   if (dayMatrix.length !== 7) {
//     return false;
//   }
//   let result = true;
//   dayMatrix.forEach((d) => {
//     if (d.length !== 5) {
//       result = false;
//     }
//   });
//   return result;
// }

function getMappedDays(queryDays) {
  let dayMatrix;
  try {
    dayMatrix = queryDays.map((d) => {
      const amountColonColor = d.split(','); // [ '2:5', '1:1', '1:4', '1:3' ],
      return calculateDayMatrix(amountColonColor);
    });

    // if (!isValid(dayMatrix)) {
    //   return DEFAULT_DAYS;
    // }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return DEFAULT_DAYS;
  }
  return dayMatrix;
}

function getRate(rates) {
  let ratesArray = [];
  ratesArray = rates.map((d) => {
    const amountColonColor = d.split(',');
    const newRecordObject = {
      width: Number(amountColonColor[0]),
      color: COLOR_MAPPING[Number(amountColonColor[1])],
    };
    return newRecordObject;
  });
  return ratesArray;
}

module.exports = {
  readTemplateProgress,
  readTemplate,
  getMappedDays,
  getRate,
  readTemplateCounter,
  calculateDayMatrix,
};
