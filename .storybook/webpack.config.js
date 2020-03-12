const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'react-docgen-typescript-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};