import getBestLocaleForRequest from './getBaseLocaleForRequest';

export default function createNormalizationContext(req) {
  return {
    common: {
      locale: getBestLocaleForRequest(req),
    },
  };
}
