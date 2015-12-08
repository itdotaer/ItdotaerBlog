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
    buildDev: true,
    hash: 'fb69e99dcfed9b73ec35'
};

var dbConfig = {
  poolSize: 20,
  address: 'mongodb://127.0.0.1:27017/ItdotaerBlog-Dev'
}

module.exports = {
    appInfo: appInfo,
    dbConfig: dbConfig
};
