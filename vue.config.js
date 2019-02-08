module.exports = {
    runtimeCompiler: true,
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/showdown-portfolio/' // prod
    : '/', // dev
}
