import IntlMessageFormat from 'intl-messageformat';
import memoizeIntlConstructor from 'intl-format-cache';
import mapMessagesByLocale from './mapMessagesByLocale';
import config from '../config';

const defaultOptions = {
  formatters: {
    getNumberFormat: memoizeIntlConstructor(Intl.NumberFormat),
    getDateTimeFormat: memoizeIntlConstructor(Intl.DateTimeFormat),
    getPluralRules: memoizeIntlConstructor(Intl.PluralRules),
  },
};

export default function formatMessage(messageId, locale, values, overrideFormats, options) {
  const message = mapMessagesByLocale[locale][messageId]
    || mapMessagesByLocale[config.common.defaultLocale][messageId];
  if (!message) {
    return messageId;
  }

  const format = new IntlMessageFormat(
    message,
    locale,
    overrideFormats,
    options ? { ...defaultOptions, ...options } : defaultOptions,
  );
  return format.format(values);
}
