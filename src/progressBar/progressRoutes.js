import userProgressAction from './userProgressAction';
import wrapAsyncHandler from '../common/wrapAsyncHandler';

export default function routes(app) {
  // TODO: add `celebrate` middleware to validate query
  app.get('/company-rating-insights.jpg', wrapAsyncHandler(userProgressAction));
}
