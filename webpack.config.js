
// const webpack = import('webpack')
import path from 'node:path'
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// const TerserWebpackPlugin = import('terser-webpack-plugin')
import TerserPlugin from 'terser-webpack-plugin'

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv)).argv
const env = argv.env

const libraryName = 'PacketDataStructuresAlgorithms'

let plugins = []
let outputFile = ''

if (env === 'build') {
    outputFile = `${libraryName}.min.js`
} else {
    outputFile = `${libraryName}.js`
}

const config = {
    // mode: 'development',
    entry: __dirname + '/src/js/index.js',
    output: {
        path: __dirname + '/examples',
        filename: outputFile,
        library: {
            name: libraryName,
            type: 'umd',
            umdNamedDefine: true
        }
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]

    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src/js')],
        extensions: ['.json', '.js']
    },

    // terser-webpack-plugin 配置项, 美化压缩代码
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin()]
    }
}

export default config

