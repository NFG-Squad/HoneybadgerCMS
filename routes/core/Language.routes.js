'use strict';
const { Logger } = require('../../core/CoreUtils');

class LanguageRoutes {

  constructor(server) {
    Logger.trace('LanguageRoutes : constructor');
    this.server = server;
  }
  register(router) {
    Logger.trace('LanguageRoutes : register');
    this.server.app.use(this.setLanguage.bind(this));
    return router;
  }
  setLanguage(req, res, next) {
    Logger.trace('LanguageRoutes : setLanguage');
    switch (req.query.lang) {
      case 'es-mx':
        res.locals.lang = { name: 'es-mx', pack: require('../../languages/es-mx') };
        break;
      case 'en-us':
      default:
        res.locals.lang = { name: 'en-us', pack: require('../../languages/en-us') };
        break;
    }
    next();
  }
}

module.exports = LanguageRoutes;
