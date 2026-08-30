import { antfu } from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  markdown: true,
  yaml: true,
  jsx: true,

  // features disabled
  toml: false,
  pnpm: false,

  formatters: {
    css: true,
    prettierOptions: {
      plugins: ['prettier-plugin-css-order'],
    },
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
    overrides: {
      'style/implicit-arrow-linebreak': ['error', 'beside'],
      'style/nonblock-statement-body-position': ['error', 'beside'],
      'style/brace-style': 'error',
    },
  },
  rules: {
    // yaml
    'yaml/indent': ['error', 2],

    // js
    'no-nested-ternary': 'error',
    'unicorn/no-useless-undefined': 'error',
    'max-params': ['error', 3],
    'ts/no-unused-expressions': ['error', {
      allowTernary: false,
    }],

    // perfectionist sorting imports
    'perfectionist/sort-named-imports': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: true,
      },
    ],

    // off
    'no-else-return': 'error',
    'no-cond-assign': 'off',
    'no-console': 'off',
    'node/prefer-global/process': 'off',
    'no-template-curly-in-string': 'off',
    'antfu/no-top-level-await': 'off',
    'antfu/if-newline': 'off',
    'ts/method-signature-style': 'off',
    'ts/no-redeclare': 'off',
    'ts/consistent-type-definitions': 'off',
    'ts/ban-ts-comment': 'off',
    'vue/custom-event-name-casing': 'off',
    'regexp/no-super-linear-backtracking': 'off',
    'regexp/no-obscure-range': 'off',
  },
})
