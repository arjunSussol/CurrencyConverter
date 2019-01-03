module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",

    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "import/prefer-default-export": "off",
        "jsx-boolean-value": "off",
        "object-shorthand": "off",
        "react/jsx-filename-extension": [
            2,
            {
              "extensions": [
                ".js",
                ".jsx"
              ]
            }
          ],
          "react/forbid-prop-types": [
            0
          ],
          "react/require-default-props": [
            0
          ],
          "global-require": [
            0
          ],
        "react/prop-types": [
            "enabled",
            { "ignore": "ignore", "customValidators": "customValidator" }
          ],
          "quote-props": "off",
          "no-console": "off",
          "max-len": "off"
          
},
};