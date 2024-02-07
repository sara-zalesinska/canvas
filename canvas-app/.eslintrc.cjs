module.exports = {
  root: true,
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    'eslint:recommended',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'eslint-config-prettier',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2023,
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    'no-useless-escape': 0,
  },
};