import healthzAction from './healthzAction';
import wrapAsyncHandler from './wrapAsyncHandler';

export default function routes(app) {
  app.get('/healthz', wrapAsyncHandler(healthzAction));
}
