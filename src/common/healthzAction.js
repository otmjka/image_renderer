import db from './db';
import amqpChannel from './amqpChannel';

export default async function healthzAction(req, res) {
  await db.sequelize.authenticate();
  const ch = await amqpChannel;
  if (ch.closed) {
    throw new Error('amqp channel is closed.');
  }
  res.status(200).send();
}
