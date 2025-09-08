import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import promise from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      perfectionist: perfectionist,
      promise: promise,
      react: reactPlugin,
      'react-hooks': reactHooks,
      sonarjs: sonarjs,
      unicorn: unicorn,
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      complexity: ['warn', 10],
      'import/no-unresolved': 'off', // Vite handles this
      'import/order': [
        'error',
        {
          alphabetize: { caseInsensitive: true, order: 'asc' },
          groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index'], ['type']],
          'newlines-between': 'always',
        },
      ],
      // Accessibility
      'jsx-a11y/alt-text': 'error',

      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'max-depth': ['warn', 4],
      'max-lines': ['warn', { max: 400, skipBlankLines: true, skipComments: true }],

      'max-lines-per-function': ['warn', { max: 120, skipBlankLines: true, skipComments: true }],
      // Code quality
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      // Perfectionist for sorting
      'perfectionist/sort-imports': ['error', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-objects': ['warn', { order: 'asc', type: 'natural' }],

      // Promise handling
      'promise/catch-or-return': 'error',
      'promise/no-nesting': 'warn',

      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      // React rules
      'react/jsx-uses-react': 'off',

      'react/react-in-jsx-scope': 'off',
      // SonarJS quality rules
      'sonarjs/cognitive-complexity': ['warn', 15],

      'sonarjs/no-duplicate-string': 'warn',
      // General code style
      'unicorn/filename-case': ['warn', { case: 'kebabCase' }],

      'unicorn/prefer-node-protocol': 'off',
      // Import/Export cleanup
      'unused-imports/no-unused-imports': 'error',
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
