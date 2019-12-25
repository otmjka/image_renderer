import ejs from 'ejs';
import svg2img from 'svg2img';

import { JPG_QUALITY, JPG_HEADERS } from './enums';
import { readTemplate, getMappedDays } from './helpers';

const str = readTemplate();

export default async function userWeeklyDigestAction(req, res) {
  const queryDays = req.query.days;
  const days = getMappedDays(queryDays);
  const renderedStr = ejs.render(str, { days });

  svg2img(renderedStr, JPG_QUALITY, (error, buffer) => {
    res.writeHead(200, JPG_HEADERS);
    res.end(buffer);
  });
}
