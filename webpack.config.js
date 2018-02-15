let path = require('path');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ManifestRevisionPlugin = require('manifest-revision-webpack-plugin');

let libraryName = 'my-awesome-library'
let rootAssetPath = './assets';

const paths = {
  libSrc: path.resolve(__dirname, './'),
  libIndex: path.resolve(__dirname, 'src/index.js'),
  libOutputDir: path.resolve(__dirname, 'build/public'),
  libModules: path.resolve(__dirname, 'node_modules')
}


module.exports = {
  entry: {
    app_js: [
      rootAssetPath + '/src/index.js'
    ],
    app_css: [
      rootAssetPath + '/styles/main.css'
    ]
  },
  entry: paths.libIndex,
  devtool: 'source-map',
  output: {
    path: paths.libOutputDir,
    filename: libraryName + '.js',
    publicPath: 'http://localhost:2992/assets/',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  /*output: {
    path: path.libOutputDir,
    publicPath: 'http://localhost:2992/assets/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  },*/
  resolve: {
    modules: [paths.libModules, paths.libSrc],
    extensions: ['.json', '.js', '.jsx', '.html']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.(jpe?g|png|gif|svg([\?]?.*))$/i,
        loaders: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new ManifestRevisionPlugin(path.join('build', 'manifest.json'), {
      rootAssetPath: rootAssetPath,
      ignorePaths: ['/styles', '/scripts']
    })
  ]
};
