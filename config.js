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
    hash: '7a0dc667b636729b7761',
    apiUrl: 'http://huan.herokuapp.com/api',
    gitHubRepo: 'http://github.com/Itdotaer/ItdotaerBlog'
};

var dbConfig = {
    poolSize: 20,
    address: 'mongodb://itdotaer:itdotaer@kahana.mongohq.com:10093/blog'
}

module.exports = {
    appInfo: appInfo,
    dbConfig: dbConfig
};
