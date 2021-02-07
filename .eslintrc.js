module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "plugins": ["prettier"],
  "extends": ["eslint:recommended", "airbnb", "lambdas"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": "error",
    quotes: [2, "single", "avoid-escape"],
    // avoidEscape: true
    "max-len": 0,
    "object-curly-newline": 0,
  }
};