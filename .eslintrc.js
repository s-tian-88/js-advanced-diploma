module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
  },
  "overrides": [
    {
      "files": ["*.test.js"],
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": { "jest/prefer-expect-assertions": "off" }
    }
  ],
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  rules: {
    "no-unused-vars": "off",
  }
}
