const { defineConfig } = require('eslint-define-config');

const options = defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    '@typescript-eslint/no-var-requires': [
      'off'
    ],
    'vue/multi-word-component-names': [
      'off'
    ],
    'vue/no-setup-props-destructure': [
      'off'
    ],
    'vue/no-multiple-template-root': [
      'off'
    ],
    '@typescript-eslint/no-explicit-any': [
      'off'
    ],
    'comma-dangle': [
      'off'
    ],
    '@typescript-eslint/ban-ts-comment': [
      'off'
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    }
  ]
});

module.exports = options;
