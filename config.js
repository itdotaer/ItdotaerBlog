/**
 * Itdoater Blog's entire config information
 */

var appInfo = {
    appName: 'Itdotaer Blog',
    shortDescription: 'By Harry',
    author: 'Harry Hu',
    email: 'hujiangtao1235@qq.com',
    buildDev: true,
    isDebug: true,
    sessionSecret: 'itdotaer',
    hash: 'fb69e99dcfed9b73ec35',
    apiUrl: 'http://10.44.22.82:3000/api',
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
