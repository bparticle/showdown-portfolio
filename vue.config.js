module.exports = {
    runtimeCompiler: true,
    publicPath: process.env.NODE_ENV === 'production'
    ? '/showdown-portfolio/' // prod
    : '/', // dev
}
