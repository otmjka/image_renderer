import fs from 'fs';
import path from 'path';

import {
  COLOR_MAPPING,
  DEFAULT_DAYS,
  PROGRESS_BAR,
  WEEK_DIGEST_TEMPLATE,
  WEEK_DIGEST_TEMPLATE_COUNTER,
} from './enums';

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
// amountColonColorArrayRaw ['1:1','4:2','0:3','2:4','1:5']
// result [{color: "#000", coef: 50}, {color: "#000", coef: 50}]
function calculateDayMatrix(amountColonColorArrayRaw) {
  // filter empty amount
  const amountColonColorArray = amountColonColorArrayRaw.filter((i) => {
    const [amount] = getAmountColor(i);
    return amount > 0;
  });
  const groupedByColor = groupByColor(amountColonColorArray);
  const totalCellsAmount = getTotalCellsAmount(groupedByColor);
  const coef = 100 / totalCellsAmount;
  const dayMatrix = amountColonColorArray.map((amoutColonColor, n) => {
    const [amount, colorIndex] = getAmountColor(amoutColonColor);
    const result = { color: COLOR_MAPPING[colorIndex], coef: coef * amount };
    return result;
  });
  return dayMatrix;
}

// colorsAmountDict {1:0, 1:1, 1:2} => 3
function getTotalCellsAmount(colorsAmountDict) {
  let acc = 0;
  for (let color in colorsAmountDict) {
    acc += colorsAmountDict[color];
  }

  return acc;
}

// amountColonColorStr '1:2' => [1, 2]
function getAmountColor(amountColonColorStr) {
  const [amountStr, colorStr] = amountColonColorStr.split(':');
  const amount = parseInt(amountStr, 10);
  const color = parseInt(colorStr, 10);
  return [amount, color];
}

/*
amountColonColorArray ['1:1','4:2','2:4','1:5'] =>
{
  1: 1,
  2: 4,
  4: 2,
  5: 1,
}
*/
function groupByColor(amountColonColorArray) {
  // group by color
  const reducer = (acc, currentValue) => {
    const [amount, color] = getAmountColor(currentValue);
    acc[color] = (acc[color] || 0) + amount;
    return acc;
  };
  const dayColors = amountColonColorArray.reduce(reducer, {});
  return dayColors;
}

function getMappedDays(queryDays) {
  let dayMatrix;
  try {
    dayMatrix = queryDays.map((d) => {
      const amountColonColor = d.split(','); // [ '2:5', '1:1', '1:4', '1:3' ],
      return calculateDayMatrix(amountColonColor);
    });
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

export {
  readTemplateProgress,
  readTemplate,
  getMappedDays,
  getRate,
  readTemplateCounter,
};
