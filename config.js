/**
 * Itdoater Blog's entire config information
 */

/**
 * [appInfo description]
 * If buildDev is true, webpack will generate resourse files without hash code,
 * else will with hash code.And you need update the hash manually.
 */
var appInfo = {
    appName: 'Itdotaer Blog',
    shortDescription: 'By Harry',
    author: 'Harry Hu',
    email: 'hujiangtao1235@qq.com',
    buildDev: true,
    hash: 'fb69e99dcfed9b73ec35',
    apiUrl: 'http://10.44.22.76:3000/api',
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
