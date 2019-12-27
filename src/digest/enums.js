const colors = {
  green: '#12D600',
  pink: '#FF3666',
  violet: '#5E40DD',
  yellow: '#FFC800',
  gray: '#EDEFF2',
  black: '#000',
  white: '#FFF',
};

const COLOR_MAPPING = [
  colors.green, // 0
  colors.pink, // 1
  colors.violet, // 2
  colors.yellow, // 3
  colors.gray, // 4
  colors.black, // 5
  colors.white, // 6
];

const DAY_LINE = [
  COLOR_MAPPING[0],
  COLOR_MAPPING[1],
  COLOR_MAPPING[2],
  COLOR_MAPPING[3],
  COLOR_MAPPING[4],
];

const DEFAULT_DAYS = [
  DAY_LINE,
  DAY_LINE,
  DAY_LINE,
  DAY_LINE,
  DAY_LINE,
  DAY_LINE,
  DAY_LINE,
];

const DEFAULT_COLOR = colors.black;

const WEEK_DIGEST_TEMPLATE = 'userWeeklyDigestTemplate.svg';
const PROGRESS_BAR = 'userCompanyRatingInsights.svg';
const WEEK_DIGEST_TEMPLATE_COUNTER = 'userWeeklyDigestCounterTemplate.svg';

const JPG_QUALITY = { format: 'png', quality: 100 };
// const JPG_QUALITY = { format: 'jpg', quality: 100 };
// const JPG_HEADERS_WDC = {
//   'Content-Type': 'image/jpg',
//   'Content-Disposition': 'attachment; filename=user-weekly-digest-counter.jpg',
// };
// const JPG_HEADERS_PB = {
//   'Content-Type': 'image/jpeg',
//   'Content-Disposition': 'attachment; filename=user-rating-insights.jpg',
// };
const JPG_HEADERS_WDC = {
  'Content-Type': 'image/png',
  'Content-Disposition': 'attachment; filename=user-weekly-digest-counter.png',
};
const JPG_HEADERS_PB = {
  'Content-Type': 'image/png',
  'Content-Disposition': 'attachment; filename=user-rating-insights.png',
};
const JPG_HEADERS_WD = {
  'Content-Type': 'image/png',
  'Content-Disposition': 'attachment; filename=user-weekly-digest.png',
};

export {
  COLOR_MAPPING,
  WEEK_DIGEST_TEMPLATE,
  PROGRESS_BAR,
  DEFAULT_COLOR,
  JPG_QUALITY,
  JPG_HEADERS_WDC,
  JPG_HEADERS_WD,
  JPG_HEADERS_PB,
  DEFAULT_DAYS,
  WEEK_DIGEST_TEMPLATE_COUNTER,
};
