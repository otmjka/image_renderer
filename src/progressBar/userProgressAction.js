import ejs from 'ejs';
import svg2img from 'svg2img';

import { JPG_QUALITY, JPG_HEADERS_PB } from '../digest/enums';
import { readTemplateProgress, getRate } from '../digest/helpers';

const str = readTemplateProgress();

export default async function userProgressAction(req, res) {
  const queryRatings = req.query.ratings;
  let arr = new Array(5);
  // eslint-disable-next-line prefer-spread
  arr.splice.apply(arr, [0, queryRatings.length].concat(queryRatings));
  arr = Array.from(arr, item => item || '0,1');
  const arrayRatings = getRate(arr);
  const renderedStr = ejs.render(str, { arrayRatings });

  svg2img(renderedStr, JPG_QUALITY, (error, buffer) => {
    res.writeHead(200, JPG_HEADERS_PB);
    res.end(buffer);
  });
}
