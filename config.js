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
<<<<<<< HEAD
    hash: '4edc91ccacbfa71bffc8',
    apiUrl: 'http://huan.herokuapp.com/api',
=======
    hash: '5d7085e39aa6bf30e6fc',
    apiUrl: 'http://10.44.22.38:3000/api',
>>>>>>> master
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
