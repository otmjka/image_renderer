import fs from 'fs';
import path from 'path';

import {
  DEFAULT_COLOR,
  WEEK_DIGEST_TEMPLATE,
  COLOR_MAPPING,
  DEFAULT_DAYS,
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

function makeColorList(amountRaw, colorRaw) {
  const amount = parseInt(amountRaw, 10);
  const color = parseInt(colorRaw, 10);
  if (!amount || (color !== 0 && !color)) {
    return [];
  }
  // eslint-disable-next-line arrow-parens
  const getColor = (c) => COLOR_MAPPING[c] || DEFAULT_COLOR;
  const result = [];
  let i = 0;
  while (i < amount) {
    result.push(getColor(color));
    i += 1;
  }
  return result;
}

function calculateDayMatrix(amountColonColor) {
  const dayColorsReducer = (acc, currentValue) => {
    const [amount, color] = currentValue.split(':');
    const colors = makeColorList(amount, color);

    return [...acc, ...colors];
  };
  const init = [];
  const dayColors = amountColonColor.reduce(dayColorsReducer, init);
  return dayColors;
}

function isValid(dayMatrix) {
  if (dayMatrix.length !== 7) {
    return false;
  }
  let result = true;
  dayMatrix.forEach((d) => {
    if (d.length !== 5) {
      result = false;
    }
  });
  return result;
}

function getMappedDays(queryDays) {
  let dayMatrix;
  try {
    dayMatrix = queryDays.map((d) => {
      const amountColonColor = d.split(','); // [ '2:5', '1:1', '1:4', '1:3' ],
      return calculateDayMatrix(amountColonColor);
    });

    if (!isValid(dayMatrix)) {
      return DEFAULT_DAYS;
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return DEFAULT_DAYS;
  }
  return dayMatrix;
}

export { readTemplate, getMappedDays };
