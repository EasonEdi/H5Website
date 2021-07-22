// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {},
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*'],
    }
  }
}
