import eslintConfig from 'eslint-config-universal-code';

const config = eslintConfig({
  json: true,
  stylistic: true,
  unicorn: true,
  yml: true,
  perfectionist: true,
  typescript: true
}, {
  rules: {
    'ts/no-namespace': 'off'
  }
});

export default config;