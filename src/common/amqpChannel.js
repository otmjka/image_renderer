import amqp from 'amqplib';
import config from '../config';

const username = encodeURIComponent(config.amqp.username);
const password = encodeURIComponent(config.amqp.password);
const url = `amqp://${username}:${password}@${config.amqp.host}:${config.amqp.port}`;

function subscribeToEvents(ch) {
  ch.on('close', () => {
    // eslint-disable-next-line no-param-reassign
    ch.closed = true;
  });

  return ch;
}

export default amqp.connect(url, { heartbeat: 60 })
  .then(conn => conn.createChannel())
  .then(subscribeToEvents);
