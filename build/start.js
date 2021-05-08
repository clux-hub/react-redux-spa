/* eslint-disable no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const {clientWebpackConfig, devServerConfig, projectConfig} = require('./webpack.config');

// 如果需要兼容不支持proxy的环境，需要执行以下补丁操作
// const {patch} = require('@clux/dev-utils/dist/patch-actions');
// patch();

const server = projectConfig.devServer;
const [, , port] = server.split(':');
devServerConfig.port = port;

const compiler = webpack(clientWebpackConfig);
const devServer = new WebpackDevServer(compiler, devServerConfig);

devServer.listen(port, '0.0.0.0', (err) => {
  if (err) throw err;
  console.info(`\n \n.....${new Date().toLocaleString()} starting ${chalk.redBright('Server')} on ${chalk.underline.redBright(server)} \n`);
});
