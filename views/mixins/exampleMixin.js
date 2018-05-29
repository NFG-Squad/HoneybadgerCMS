module.exports = {
  methods: {
    hello: function () {
      console.log('Hello mixin');
    },
    addUser: function (username, age) {
      this.users.push({
        name: username,
        age: age,
      });
    }
  }
};
