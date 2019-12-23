import fs from 'fs';
import path from 'path';
import jwt from 'jwt-simple';
import addDays from 'date-fns/add_days';
import config from '../src/config';

const secret = fs.readFileSync(path.join(__dirname, './fixtures/private.decrypted.pem'));

export default function generateJwt(userId, scopes = [], exp = null) {
  const expFinal = parseInt(exp || addDays(new Date(), 1) / 1000, 10);
  const payload = {
    sub: userId,
    iss: config.token.issuer,
    aud: config.token.audience,
    exp: expFinal,
    scope: scopes.length ? scopes.join(' ') : undefined,
  };
  return jwt.encode(payload, secret, 'RS256');
}
