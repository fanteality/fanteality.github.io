const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const appSrc = path.resolve(appDirectory, 'src');
module.exports = function override(config, env) {
    // 设置快捷映射路径
    config.resolve.alias = {
        ...config.resolve.alias,
        page: path.resolve(appSrc, './page'),
        '@': path.resolve(appSrc, './components'),
        '#':path.resolve(appSrc,'./utils')
    };
    //   配置postcss
    require('react-app-rewire-postcss')(config, {
        plugins: () => [
            require('postcss-preset-env')({
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                browsers: 'last 2 versions',
                stage: 3,
            }),
        ],
    });
    return config;
};
