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
    hash: '0a441586845211ad05f0',
    apiUrl: 'http://itdotaerblog.herokuapp.com/api',
    gitHubRepo: 'http://github.com/Itdotaer/ItdotaerBlog'
};

var dbConfig = {
    poolSize: 20,
    address: 'mongodb://itdotaer:itdotaer12358@ds013414.mlab.com:13414/itdotaer'
}

module.exports = {
    appInfo: appInfo,
    dbConfig: dbConfig
};
