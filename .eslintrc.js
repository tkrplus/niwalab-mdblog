module.exports = {
  "extends": [
    "plugin:react/recommended",
    "standard"
  ],
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  "rules": {
    "react/prop-types": 0
  },
  "globals": {
    "__PATH_PREFIX__": false
  }
}
