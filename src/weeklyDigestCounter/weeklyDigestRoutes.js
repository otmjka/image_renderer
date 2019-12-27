import weeklyDigestCounterAction from './weeklyDigestCounterAction';
import wrapAsyncHandler from '../common/wrapAsyncHandler';

export default function routes(app) {
  // TODO: add `celebrate` middleware to validate query
  app.get('/weekly-digest-counter.jpg', wrapAsyncHandler(weeklyDigestCounterAction));
}
