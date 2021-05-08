const webpack = require('webpack');
const fs = require('fs-extra');
const path = require('path');
const {clientWebpackConfig, projectConfigJson, distPath, publicPath, envPath} = require('./webpack.config');

// 如果需要兼容不支持proxy的环境，需要执行以下补丁操作
// const {patch} = require('@clux/dev-utils/dist/patch-actions');
// patch();

fs.ensureDirSync(distPath);
fs.emptyDirSync(distPath);
fs.copySync(publicPath, distPath, {dereference: true});
fs.copySync(envPath, distPath, {dereference: true});
fs.moveSync(path.join(distPath, '../mock'), path.join(distPath, 'mock'), {
  dereference: true,
});
fs.writeFileSync(path.join(distPath, 'config.js'), `module.exports = ${projectConfigJson}`);

const compiler = webpack(clientWebpackConfig);

compiler.run((err, stats) => {
  if (err) throw err;
  process.stdout.write(
    `${stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    })}\n\n`
  );
});
