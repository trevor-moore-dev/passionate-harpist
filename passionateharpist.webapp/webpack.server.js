const path = require('path');

module.exports = {
 target: 'node',
 entry: ['babel-polyfill', './src/server/index.js'],
 output: {
   filename: 'bundle.js',
   path: path.resolve(__dirname, 'build-server'),
 },
 module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
         options: {
           babelrc: false,
           presets: ['@babel/preset-env', '@babel/preset-react'],
         },
       },
     },
     {
       test: /\.(gif|jpe?g|png|ico)$/,
       use: [
         {
           loader: 'url-loader',
           options: {
             limit: 10000,
           },
         },
       ],
     },
     {
       test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
       use: [
         {
           loader: 'url-loader',
           options: {
             limit: 10000,
           },
         },
       ],
     },
     {
       test: /\.css$/i,
       use: ['css-loader'],
     },
   ],
 },
 optimization: {
   nodeEnv: 'development',
 },
};