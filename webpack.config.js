const webpack = require('webpack');
const path = require('path');
const express = require('express');

const itemServer = require('./server/itemServer');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    before: app => {
      app.use(express.json());
      app.use('/list', itemServer);
    },
    contentBase: './dist'
  }
};

module.exports = config;
