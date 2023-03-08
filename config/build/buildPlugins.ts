import {
  ProgressPlugin,
  WebpackPluginInstance,
  HotModuleReplacementPlugin,
  DefinePlugin
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const {
    isDev,
    paths,
    analyzer,
    apiUrl
  } = options;

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl)
    })
  ];

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  const developmentPlugins = [
    new HotModuleReplacementPlugin()
    // new ReactRefreshWebpackPlugin()
  ];

  return isDev ? plugins.concat(developmentPlugins) : plugins;
};
