module.exports = {
  env: {
    browser: true,
    jest: true,
    'cypress/globals': true
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  plugins: ['react-hooks', 'cypress'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': 'webpack',
    react: { version: 'detect' }
  },
  rules: {
    camelcase: ['error', { properties: 'never' }],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['stories/**', 'test/**'] }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}
