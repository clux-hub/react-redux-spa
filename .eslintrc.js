module.exports = {
  root: true,
  extends: ['plugin:@clux/recommended/react'],
  env: {
    browser: false,
    node: false,
  },
  parserOptions: {
    project: './tsconfig-eslint.json',
  },
  rules: {},
  ignorePatterns: ['**/dist', '**/docs', '**/lib', './storage'],
};
