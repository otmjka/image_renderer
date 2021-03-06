import ejs from 'ejs';
import svg2img from 'svg2img';
import { JPG_QUALITY, JPG_HEADERS_WDC } from '../digest/enums';
import { readTemplateCounter } from '../digest/helpers';

const str = readTemplateCounter();

export default async function userProgressAction(req, res) {
  const queryText = req.query.text;
  const renderedStr = ejs.render(str, { queryText });
  svg2img(renderedStr, JPG_QUALITY, (error, buffer) => {
    res.writeHead(200, JPG_HEADERS_WDC);
    res.end(buffer);
  });
}
