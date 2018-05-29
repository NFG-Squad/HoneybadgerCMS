const path = require('path');
// const { Logger } = require('../CoreUtils');
const { routes } = require('../../routes/routes.json');

class RouteLoader {
  static load(server) {
    routes.forEach(r => {
      const route = require(path.join(__dirname, '../../', r));
      let routeInstance = new route(server);
      if (!routeInstance['register']) throw new Error(`Your route class does not have a register function: ${r}`);
      server.app.use('/', routeInstance.register(server.router));
    });
  }
}

module.exports = RouteLoader;
