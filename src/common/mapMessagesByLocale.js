import glob from 'glob';
import path from 'path';
import fs from 'fs';

const paths = glob.sync(path.join(__dirname, '..', '..', 'data', 'translations', '*.json'));
const mapMessagesByLocale = paths.reduce((map, p) => {
  const locale = path.basename(p).replace('.json', '');
  const messages = JSON.parse(fs.readFileSync(p));
  return { ...map, [locale]: messages };
}, {});

export default mapMessagesByLocale;
