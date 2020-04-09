const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const appSrc = path.resolve(appDirectory, 'src');
module.exports = function override(config, env) {
    // 设置快捷映射路径
    config.resolve.alias = {
        ...config.resolve.alias,
        page: path.resolve(appSrc, './page'),
        components: path.resolve(appSrc, './components')
    };
  
    return config;
};
