const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/heic-entry.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'heic-decode-bundle.js',
    library: {
      name: 'HeicDecodeLib',
      type: 'window',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(heic-decode|decode-it)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: '> 0.5%, last 2 versions, not dead',
                useBuiltIns: 'usage',
                corejs: 3,
              }]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    fallback: {
      fs: false,
      path: false,
      crypto: false,
    },
  },
  experiments: {
    asyncWebAssembly: true,
  },
};
