module.exports = {
  methods: {
    hello: function () {
      console.log('Hello mixin');
    },
    addUser: function () {
      this.users.push({
        name: 'Billy',
        age: 12,
      });
    }
  }
};
