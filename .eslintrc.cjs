module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'plugin:react/jsx-runtime',
    'standard-with-typescript'
  ],
  'overrides': [],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/indent': ['error', 2, {
      ignoredNodes: ['TSTypeParameterInstantiation']
    }]
  }
}
