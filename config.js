/**
 * Itdoater Blog's entire config information
 */
var appInfo = {
    appName: 'Itdotaer Blog',
    shortDescription: 'By Harry'
};

var dbConfig = {
  poolSize: 20,
  address: 'mongodb://127.0.0.1:27017/ItdotaerBlog-Dev'
}

module.exports = {
    appInfo: appInfo,
    dbConfig: dbConfig
};
