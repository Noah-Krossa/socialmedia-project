/* eslint-disable @typescript-eslint/no-var-requires */
const {join} = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  const isProd = !!env.poroduction

  return {
    mode: isProd? 'production': 'development',
    entry: join(__dirname, 'src/index.tsx'),
    output: {
      path: join(__dirname, 'dist'),
      filename: 'app.bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          enforce: 'pre',
          use: [
            {
              options: {
                eslintPath: require.resolve('eslint')
              },
              loader: require.resolve('eslint-loader')
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: join(__dirname, 'public/index.html')
      })
    ],
    devtool: isProd? 'eval': 'source-map',
    devServer: {
      port: 8080,
      watchContentBase: true,
      open: true
    }
  }
}