const ERROR = 'error';
const WARN = 'warn';
const OFF = 'off';

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ERROR,
    'no-console': OFF,
    'no-debugger': WARN,
    // 类成员之间加空行
    'lines-between-class-members': [ERROR, 'always']
  },
};
