import jwt from 'express-jwt';
import config from '../config';
import jwtSecret from './jwtSecret';

const jwtMiddleware = jwt({
  secret: jwtSecret,
  issuer: config.token.issuer,
  audience: config.token.audience,
  algorithms: ['RS256'],
});

export default jwtMiddleware;
