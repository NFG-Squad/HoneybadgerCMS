'use strict';
const { Logger } = require('../../core/CoreUtils');

const users = [];
const pageTitle = 'Express Vue App';
users.push({
  name: 'tobi',
  age: 12,
});
users.push({
  name: 'loki',
  age: 14,
});
users.push({
  name: 'jane',
  age: 16,
});
users.push({
  name: 'Sean',
  age: 30,
});

class TestRoute {

  constructor(server) {
    Logger.trace('TestRoute : constructor');
    this.server = server;
  }
  register(router) {
    Logger.trace('TestRoute : register');
    router.get('/', this.home.bind(this));
    router.get('/users/:userName', this.users.bind(this));
    return router;
  }
  home(req, res, next) { // eslint-disable-line no-unused-vars
    const data = {
      title: pageTitle,
      message: 'Hello!',
      users: users,
    };

    const vue = {
      head: {
        title: pageTitle,
        metas: [{
          property: 'og:title',
          content: pageTitle,
        },
        {
          name: 'twitter:title',
          content: pageTitle,
        }, {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
        ],
        structuredData: {
          '@context': 'http://schema.org',
          '@type': 'Organization',
          'url': 'http://www.your-company-site.com',
          'contactPoint': [{
            '@type': 'ContactPoint',
            'telephone': '+1-401-555-1212',
            'contactType': 'customer service',
          }],
        },
      },
    };
    res.renderVue('index.vue', data, vue);
    // next();
  }
  async users(req, res, next) { // eslint-disable-line no-unused-vars
    Logger.info('starting');

    try {
      var user = users.filter(function(item) {
        return item.name === req.params.userName;
      })[0];
      // if (!user) user = {
      //   name: 'unknown',
      //   age: '?'
      // };
      if (!user) {
        res.renderVue('404.vue');
        return;
      }

      res.renderVue('user.vue', {
        title: 'Hello My Name is',
        user: user,
      });
      Logger.info('after');

      // next();
    } catch(err) {
      Logger.info('well, shit');
      Logger.error(err);
    }
  }

}

module.exports = TestRoute;
