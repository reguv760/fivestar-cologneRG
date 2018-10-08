# Install Needed Packages
* Node
    - This will also install NPM (Node Package Managers)
* [Git](https://git-scm.com/downloads)
    - Or install with [homebrew](https://brew.sh/)
        + Mac only
* Code Editor
    - [VS Code](https://code.visualstudio.com/download) is recommended
* [mLab](https://mlab.com/)(for mongo DB) - sign up
* [Heroku](https://signup.heroku.com) (for deployment) - Sign up
* Download React Developer Tools
    - Chrome browser
        + Window > Extensions > hamburger icon > open chrome webstore > search for [react dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en-US)

## Install Prettier and ESLint
* You should use ESLint in all your projects
`.eslintrc`

```
{
  "extends": "react-app",
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

`.prettierrc`

```
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

### Add this to `/package.json`
`package.json`

```
// MORE CODE
"devDependencies": {
   "eslint-plugin-prettier": "^2.6.2",
   "husky": "^0.14.3",
   "prettier": "^1.14.2",
   "pretty-quick": "^1.6.0"
 }
```

#### Intall new packages with `npm`
`$ npm install`

### Resources
* Configs for `eslint` and `prettier`
* You can use the above code for barebones eslint and prettier or you can use the more complete linter below

## My recommendation
* Using a more powerful .eslintrc is essential for a modern developer toolbelt but there is so much material to cover I will push the intro of a more intense .elintrc for later
* Let's try to stay focused
* Below are resources for you to take a peek at but let's wait to use them and use the `.eslint` and `.prettierrc` configs above

* Add to `package.json`

```
// MORE CODE
"devDependencies": {
  "eslint": "^5.3.0",
  "eslint-config-airbnb": "^17.0.0",
  "eslint-plugin-import": "^2.13.0",
  "eslint-plugin-jsx-a11y": "^6.1.1",
  "eslint-plugin-react": "^7.10.0",
  "react-testing-library": "^4.1.7"
},
"dependencies": {
  "concurrently": "^4.0.1"
}
// MORE CODE
```

* Or install them with `npm`

`$ npm i -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react react-testing-library prettier eslint-plugin-prettier husky pretty-quick`

## You can have multiple `.eslintrc` files but they will cascade
* To start off put `.eslintrc` in the root of your app
* Once you add these you will have much more strict React rules
  - (One example of what you'll have to add) You'll need to add PropTypes

#### Wes Bos
`.eslintrc`

```
{
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jquery": true,
    "jest": true
  },
  "rules": {
    "no-debugger": 0,
    "no-alert": 0,
    "no-unused-vars": [
      1,
      {
        "argsIgnorePattern": "res|next|^err"
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
      }
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "no-unused-expressions": [
      2,
      {
        "allowTaggedTemplates": true
      }
    ],
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-console": 0,
    "import/prefer-default-export": 0,
    "import": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "react/display-name": 1,
    "react/no-array-index-key": 0,
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "react/no-unescaped-entities": 0,
    "jsx-a11y/accessible-emoji": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "radix": 0,
    "no-shadow": [
      2,
      {
        "hoist": "all",
        "allow": [
          "resolve",
          "reject",
          "done",
          "next",
          "err",
          "error"
        ]
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
      }
    ],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "aspects": [
          "invalidHref"
        ]
      }
    ]
  },
  "plugins": [
    // "html",
    "prettier"
  ]
}
```

## Scott Tolinski
`.eslintrc.js`

```js
module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "es6": true
  },
  "settings": {
        "ecmascript": 6,
        "jsx": true
  },
  "parserOptions": {
      "ecmaVersion": 2017,
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "experimentalDecorators": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react",
  ],
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": 0,
    "function-paren-newline": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-one-expression-per-line": 0,
  },
  "globals": {
      "test": true,
      "expect": true,
      "afterEach": true
  }
};
```

### add rules to `.eslintrc`
```
// MORE CODE

"extends": "airbnb",
"rules": {
  "react/jsx-filename-extension": 0
}

// MORE CODE
```

## Eslint disable one line
`// eslint-disable-line`

## Eslint more specific disable line
`// eslint-disable-line react/no-did-mount-set-state`

## Eslint turn off for entire page
`/* eslint react/no-did-mount-set-state: 0 */`

