const path = require("path");

module.exports = {
  auth0: {
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_DOMAIN,
    secret: process.env.SECRET_KEY,
  },
  i18n: {
    locales: ["fr", "en", "es"],
    defaultLocale: "en",
    queryParameter: "language",
    retryInDefaultLocale: false,
    indent: "\t",
    register: global,
    directory: path.join(__dirname, "./../locales"),
    updateFiles: false,
    autoReload: true,
    logWarnFn: (msg) => console.log(msg),
    logErrorFn: (msg) => console.log(msg),
  },
};
