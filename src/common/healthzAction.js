import db from './db';

export default async function healthzAction(req, res) {
  await db.sequelize.authenticate();
  res.status(200).send();
}
