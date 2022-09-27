const { i18n } = require("./../utils");

module.exports = (req, res, next) => {
  let language = req.acceptsLanguages("en", "fr","es") || "en";
  console.info(
    `${req.method} : ${req.originalUrl} : Accept-Language : ${language}`
  );
  i18n.setLocale(language);
  return next();
};
