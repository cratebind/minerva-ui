// const path = require('path');
const webpack = require('webpack');

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         loaders: ['style-loader', 'css-loader', 'sass-loader'],
//         include: path.resolve(__dirname, '../'),
//       },
//       {
//         test: /\.css/,
//         loaders: ['style-loader', 'css-loader'],
//         include: path.resolve(__dirname, '../'),
//       },
//       {
//         test: /\.tsx?$/,
//         include: path.resolve(__dirname, '../src'),
//         loader: 'react-docgen-typescript-loader',
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
//         loader: 'file-loader',
//       },
//     ],
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       '__DEV__': process.env.NODE_ENV === 'development'
//     })
//   ],
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
// };

const path = require('path')
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          reportFiles: ['stories/**/*.{ts|tsx}']
        }
      }
    ]
  })
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      }
    ]
  })
  config.plugins.push(
    new webpack.DefinePlugin({
      '__DEV__': process.env.NODE_ENV === 'development'
    })
  );
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = Object.assign(config.resolve.alias, { '@': path.resolve(__dirname, '..') })
  return config
}