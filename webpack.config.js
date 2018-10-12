module.exports = (env) => {
    const cmd = process.env['npm_lifecycle_event']
    const type = cmd.split(':')[1]
    const theme = !type ? 'classic' : type
    return require(`./webpack.${env}.js`)(theme)
}