'use strict';
const { Logger } = require('../../core/CoreUtils');

class UserRoutes {

  constructor(server) {
    Logger.trace('UserRoutes : constructor');
    this.server = server;
    this.model = this.server.app.locals.models.user;
  }
  register(router) {
    Logger.trace('UserRoutes : register');
    router.post('/users', this.create.bind(this));
    router.patch('/users', this.update.bind(this));
    router.get('/users/?:id', this.read.bind(this));
    router.delete('/users', this.delete.bind(this));
    return router;
  }
  async create(req, res) {
    try {
      let { first, last } = req.body;
      Logger.info({ first, last });
      let obj = new this.model({ first, last });
      let mongoRes = await this.model.insertMany([obj]);
      res.sendStatus(200);
    } catch(err) {
      Logger.error(err);
      res.status(500).json({ message: 'A server error has occurred.', status: 500 });
    }
  }
  async read(req, res) {
    try {
      Logger.info(req.params.id)
      let query = (req.params.id) ? { _id: req.params.id } : {};
      let mongoRes = await this.model.find(query);
      res.json(mongoRes);
    } catch(err) {
      Logger.error(err);
      res.status(500).json({ message: 'A server error has occurred.', status: 500 });
    }
  }
  update(req, res) {
    res.status(503).json({ message: 'Not implemented', status: 503 });
  }
  delete(req, res) {
    res.status(503).json({ message: 'Not implemented', status: 503 });
  }
}

module.exports = UserRoutes;
