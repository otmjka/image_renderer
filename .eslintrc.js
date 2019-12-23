module.exports = {
  'parser': 'babel-eslint',
  'extends': 'airbnb',
  'rules': {
    // don't like .jsx
    'react/jsx-filename-extension': 0,
    // cannot remember why
    'import/no-extraneous-dependencies': 0,
    // was containing 'any' and 'object', we often have not important types which can fall back to general types
    'react/forbid-prop-types': [
      'error',
      {
        'forbid': ['array'],
        'checkContextTypes': true,
        'checkChildContextTypes': true
      }
    ]
  }
};
