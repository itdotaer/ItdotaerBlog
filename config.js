/**
 * Itdoater Blog's entire config information
 */

var appInfo = {
    appName: 'Itdotaer Blog',
    shortDescription: 'By Harry',
    author: 'Harry Hu',
    email: 'hujiangtao1235@qq.com',
    buildDev: false,
    isDebug: false,
    hotPostNum: 5,
    sessionSecret: 'itdotaer',
    hash: '5d7085e39aa6bf30e6fc',
    apiUrl: 'http://10.44.22.38:3000/api',
    gitHubRepo: 'http://github.com/Itdotaer/ItdotaerBlog'
};

var dbConfig = {
    poolSize: 20,
    address: 'mongodb://127.0.0.1:27017/ItdotaerBlog-Dev'
}

module.exports = {
    appInfo: appInfo,
    dbConfig: dbConfig
};
