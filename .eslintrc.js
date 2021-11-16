module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["airbnb-base", "plugin:@typescript-eslint/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["jest", "@typescript-eslint"],
  rules: {
    "no-dupe-keys": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-extra-boolean-cast": "off",
    "prefer-const": "off",
    "no-param-reassign": "off",
    "consistent-return": "off",
    "no-continue": "off",
    "no-var-requires": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "no-plusplus": "off",
    "default-case": "off",
    "no-useless-escape": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
    "import/prefer-default-export": "off",
  },
};
