module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },

  extends: 'react-app',

  globals: {
    tw: true
  },

  plugins: ['@emotion'],

  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    eqeqeq: ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'object-curly-spacing': ['error', 'always'],
    'no-undefined': ['error'],
    'no-unused-expressions': ['error'],
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'comma-dangle': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    'no-multi-spaces': ['error'],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': ['error', { multiline: true }],
    'no-trailing-spaces': ['error'],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'prefer-const': ['error'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],

    // Use dotnotation for accessing properties of an object whenever possible
    'dot-notation': ['error'],

    // Enforce the usage of a space before blocks in if statements, function declarations, etc.
    'space-before-blocks': ['error', 'always'],

    // Enforces the use of spaces around infix operators (ex: +, -, *, /)
    'space-infix-ops': [
      'error',
      {
        int32Hint: false
      }
    ],

    // Enforces the usage of spaces around word-based unary operators (ex: typeof, delete),
    // and disallows the usages of spaces around non-word unary operators (ex: !, ++, --)
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ]
  }
};
