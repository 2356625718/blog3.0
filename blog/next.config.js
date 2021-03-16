// css跟less 并存使用
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')


config.module.rules.push({
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  loader: require.resolve("url-loader"),
  options: {
    limit: 10000,
    name: "static/media/[name].[hash:8].[ext]",
  },
});

module.exports = withLess(withCSS({}))