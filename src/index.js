import * as Sentry from '@sentry/node';
import app from './app';
import config from './config';

if (config.sentry.dsn) {
  Sentry.init({ dsn: config.sentry.dsn });
}

const port = process.env.NODE_PORT || 8080;
async function main() {
  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`Listening on port ${port}.`));
}
main();
