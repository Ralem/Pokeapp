// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  'globals': {
    'App': true,
    'document': true,
    'window': true,
    'TweenMax': true,
    'TweenLite': true,
    'TimelineMax': true,
    'Sine': true,
    'Power0': true,
    'Power1': true,
    'Power2': true,
    'Power3': true,
    'Power4': true,
    'Back': true,
    'Elastic': true,
    'Linear': true,
    'Expo': true,
    'FB': true,
    'twttr': true,
    'gapi': true,
    'requestAnimationFrame': true,
    'google': true,
  },
  // add your custom rules here
  'rules': {
    'comma-dangle': ['off'],
    'padded-blocks': 0,
    'no-unused-vars': ['warn'],
    'no-undef': ['warn'],
    'quotes': ['off'],
    'no-console': ['off'],
    'max-len': ['off'],
    'semi': ['off', 'always'],
    'space-before-blocks': ['off'],
    'space-before-function-paren': ['off'],
    'camelcase': ['warn'],
    'comma-style': ['warn', 'last'],
    'spaced-comment': ['off'],
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2,
    "react/react-in-jsx-scope": 1,
    'indent': [1, 4, {
      'SwitchCase': 1
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "lastest", // React version, default to the latest React stable release
            // "flowVersion": "0.81" // Flow version
        },
        "propWrapperFunctions": ["forbidExtraProps"] // The names of any functions used to wrap the
        // propTypes object, e.g. `forbidExtraProps`.
        // If this isn't set, any propTypes wrapped in
        // a function will be skipped.
    }
}
