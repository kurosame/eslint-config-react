module.exports = {
  env: {
    browser: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  plugins: ['react-hooks'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': 'webpack',
    react: { version: 'detect' }
  },
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['stories/**', 'test/**'] }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}
