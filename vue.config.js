module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/visa/'
      : '/',
      outputDir: 'docs'
  }