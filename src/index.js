import * as Sentry from '@sentry/node';
import db from './common/db';
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

// doesn't work, TODO: check why
process.on('SIGTERM', async () => {
  // eslint-disable-next-line no-console
  console.log('Closing database connection..');
  await db.sequelize.close();
});
