'use strict';
const { Logger } = require('../../core/CoreUtils');

class NotFoundRoutes {

  constructor(server) {
    Logger.trace('NotFoundRoutes : constructor');
    this.server = server;
  }
  register(router) {
    Logger.trace('NotFoundRoutes : register');
    router.get('/404', this.notFound.bind(this));
    router.get('/*', this.notFound.bind(this));
    return router;
  }
  notFound(req, res, next) { // eslint-disable-line no-unused-vars
    res.status(404).renderVue('NotFound.vue');
  }
}

module.exports = NotFoundRoutes;
