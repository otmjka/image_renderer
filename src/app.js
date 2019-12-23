import express from 'express';
import bodyParser from 'body-parser';
import { errors as joiErrors } from 'celebrate';
import apiErrorHandler from 'api-error-handler';
import * as Sentry from '@sentry/node';
import commonRoutes from './common/commonRoutes';
import config from './config';

const app = express();
if (config.sentry.dsn) {
  app.use(Sentry.Handlers.requestHandler());
}
app.use(bodyParser.json());

commonRoutes(app);

app.use(joiErrors());
// should be after joi, they also throw exceptions
if (config.sentry.dsn) {
  app.use(Sentry.Handlers.errorHandler());
}
const isStackShown = process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'production';
app.use(apiErrorHandler({ isStackShown }));

export default app;
