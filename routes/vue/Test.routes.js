'use strict';
const { Logger } = require('../../core/CoreUtils');

const users = [];
const pageTitle = 'Express Vue';
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

const exampleMixin = {
  methods: {
    hello: function() {
      Logger.info('Hello');
    },
  },
};


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
  home(req, res, next) {
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
  users(req, res, next) {
    var user = users.filter(function(item) {
      return item.name === req.params.userName;
    })[0];
    res.renderVue('user.vue', {
      title: 'Hello My Name is',
      user: user,
    });
    // next();
  }

}

module.exports = TestRoute;
