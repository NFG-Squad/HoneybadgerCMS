'use strict';
const { Logger } = require('../../core/CoreUtils');

class UserRoutes {

  constructor(server) {
    Logger.trace('UserRoutes : constructor');
    this.server = server;
  }
  register(router) {
    Logger.trace('UserRoutes : register');
    router.post('/users', this.create.bind(this));
    router.patch('/users', this.update.bind(this));
    router.get('/users', this.read.bind(this));
    router.delete('/users', this.delete.bind(this));
    return router;
  }
  create(req, res) {
    res.status(503).json({ message: 'Not implemented', status: 503 });
  }
  read(req, res) {
    res.status(503).json({ message: 'Not implemented', status: 503 });
  }
  update(req, res) {
    res.status(503).json({ message: 'Not implemented', status: 503 });
  }
  delete(req, res) {
    res.status(503).json({ message: 'Not implemented', status: 503 });
  }
}

module.exports = UserRoutes;
