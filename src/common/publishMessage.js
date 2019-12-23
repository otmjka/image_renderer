import amqpChannel from './amqpChannel';

export default async function publishMessage(type, payload, target) {
  const ch = await amqpChannel;
  const published = ch.publish(
    target.exchangeName,
    target.routingKey,
    Buffer.from(JSON.stringify(payload), 'utf8'),
    { type, persistent: true },
  );
  if (!published) {
    throw new Error(
      `Could not publish ${type} message to ${target.exchangeName} with routing key ${target.routingKey}`,
    );
  }
}
