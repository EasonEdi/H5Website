// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "no-useless-escape": 0,
    "quotes": [0, "single"],
    "no-constant-condition": 1,//禁止在条件中使用常量表达式 if(true) if(1)
    "no-unneeded-ternary": 0,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    "curly": [2, "all"],//必须使用 if(){} 中的{}
    "no-unused-vars": [0, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
    "no-unused-expressions": 0,//禁止无用的表达式
    "spaced-comment": 0,
    "space-before-function-paren": [0, "always"],
    "semi": [0, "always"],
    "eqeqeq": 0,//必须使用全等
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-useless-return': 0,
    'no-trailing-spaces': [2, { 'skipBlankLines': true }], // 禁止多余的空格, 允许空行
  }
}
