module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  env: { jest: true },
  ignorePatterns: [
    'node_modules/',
    'coverage/',
    'android/',
    'ios/',
    'src/mocks/Setup',
  ],
  rules: {
    // 'react/jsx-uses-react': 'error',
    // 'react/jsx-uses-vars': 'error',
  },
};
