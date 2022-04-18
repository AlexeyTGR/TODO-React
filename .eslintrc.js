module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      jest: true
    },
    extends: [
      'airbnb',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'eslint:recommended'
    ],
    plugins: [
      'react'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
      ecmaVersion: 2018,
      ecmaFeatures: {
        jsx: true
      }
    },
    settings: {
      react: {
        pragma: 'React'
        // version: '16.9.0'
      }
    },
    parser: 'babel-eslint',
    rules: {
      'comma-dangle': ['error', 'always'],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react-hooks/exhaustive-deps': ['warn', {
        additionalHooks: '(useMyCustomHook|useMyOtherCustomHook)'
      }]
    //   'eol-last': ['error', 'always'],
    //   semi: ['error', 'always'],
    //   'object-curly-newline': [
    //     'error', {
    //       'ObjectExpression': { 'multiline': true, 'minProperties': 3 },
    //       'ObjectPattern': { 'multiline': true, 'minProperties': 3 },
    //       'ImportDeclaration': { 'multiline': true, 'minProperties': 3 },
    //       'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
    //     }],
    //   'import/no-unresolved': 'off', // baseUrl is used on the project
    //   'import/extensions': 'off',
    //   'import/prefer-default-export': 'off',
    //   'react/display-name': 'off',
    //   'react/jsx-props-no-spreading': 'off',
    //   'no-use-before-define': ['error', {
    //     functions: true,
    //     classes: true,
    //     variables: false
    //   }],
    //   'react/state-in-constructor': 'off'
    }
  };
  