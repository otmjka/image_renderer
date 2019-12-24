export default {
  common: {
    defaultLocale: 'en',
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
  token: {
    issuer: process.env.TOKEN_ISSUER,
    audience: process.env.TOKEN_AUDIENCE,
    certsUri: process.env.TOKEN_CERTS_URI,
  },
};
