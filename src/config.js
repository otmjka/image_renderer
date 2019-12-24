export default {
  common: {
    defaultLocale: 'en',
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
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
