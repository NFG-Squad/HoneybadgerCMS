const path = require('path');
const express = require('express');
// const https = require('https');
const http = require('http');
const bodyParser = require('body-parser');
const { Logger, Config } = require('./CoreUtils');
const RouteLoader = require('./routes/RouteLoader');
const expressVue = require('express-vue');
const mongoose = require('mongoose');


class Server {

  async start(options = {}) {
    Config.load();
    let httpPort = options.httpPort || Config.env.HTTP_PORT || 3000;
    // let httpsPort = options.httpsPort || Config.env.HTTPS_PORT || 3443;

    this.app = express();
    this.router = express.Router();

    const vueOptions = {
      rootPath: path.join(__dirname, '../views'),
    };
    const expressVueMiddleware = expressVue.init(vueOptions);
    this.expressVueMiddleware = expressVueMiddleware;
    this.app.use(expressVueMiddleware);

    // options.viewPath = '../views';
    // if (options.viewPath) {
    //   this.app.set('view engine', 'pug');
    //   this.app.set('views', options.viewPath);
    // }

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.httpServer = http.createServer(this.app).listen(httpPort);
    Logger.info(`Starting the HTTP application on port ${httpPort}`);
    // if (certificates) {
    //   this.httpsServer = https.createServer({
    //     cert: certificates.certificate, key: certificates.privateKey
    //   }, this.app).listen(httpsPort);
    //   Logger.info(`Starting the HTTPS application on port ${httpsPort}`);
    // }


    mongoose.Promise = global.Promise;
    this.app.locals.db = await mongoose.createConnection(Config.env.mongouri);
    let user = require('../models/User.model')(this.app);
    this.app.locals.models = {user};
    
    RouteLoader.load(this);
    Logger.info('App started.');
  }

  async stop() {
  }

}

module.exports = Server;
