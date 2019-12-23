import userWeeklyDigestAction from './userWeeklyDigestAction';
import wrapAsyncHandler from './wrapAsyncHandler';

export default function routes(app) {
  // TODO: add `celebrate` middleware to validate query
  app.get('/user-weekly-digest.jpg', wrapAsyncHandler(userWeeklyDigestAction));
}
