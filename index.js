module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': 'webpack'
  },
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }]
  }
}
