module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "node": true,
      "jest": true,
  },
  "overrides": [
    {
      "files": ["test/**"],
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
}
