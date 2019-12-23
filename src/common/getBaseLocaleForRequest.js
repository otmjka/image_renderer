import localeLib from 'locale';
import config from '../config';
import mapMessagesByLocale from './mapMessagesByLocale';

const supportedLocales = new localeLib.Locales(
  Object.keys(mapMessagesByLocale),
  config.common.defaultLocale,
);

// cookie -> accept-language -> default
export default function getBestLocaleForRequest(req) {
  const acceptLanguage = req.headers['accept-language'];
  if (acceptLanguage) {
    const reqLocales = new localeLib.Locales(acceptLanguage);
    return reqLocales.best(supportedLocales).toString();
  }

  return config.common.defaultLocale;
}
