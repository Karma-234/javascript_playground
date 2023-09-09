const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        index: [path.resolve(__dirname, 'scripts','chat.js')],
        index2: [path.resolve(__dirname, 'scripts','ui.js')],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    watch: true
}