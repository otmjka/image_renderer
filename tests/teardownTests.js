import db from '../src/common/db';
import config from '../src/config';

// doesn't close everything, `--detectOpenHandles` doesn't detect anything
// using `--forceExit` for now
export default async function teardownTests() {
  await db.sequelize.query(`DROP DATABASE IF EXISTS ${config.database.name}`);
  await db.sequelize.close();
}
