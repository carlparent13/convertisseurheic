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
