import fs from 'fs';
import path from 'path';
import db from '../src/common/db';
import parseSqlQueries from './parseSqlQueries';

const sqlData = fs.readFileSync(path.join(__dirname, 'database-schema.sql'));
const sqlQueries = parseSqlQueries(sqlData);

export default async function resetDatabase() {
  const t = await db.sequelize.transaction();
  try {
    for (var i in sqlQueries) {
      await db.sequelize.query(sqlQueries[i], { transaction: t });
    }
    await t.commit();
  } catch (e) {
    await t.rollback();
    throw e;
  }
}
