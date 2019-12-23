import jwksRsa from 'jwks-rsa';
import config from '../config';

const jwtSecret = jwksRsa.expressJwtSecret({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: config.token.certsUri,
});

export default jwtSecret;
