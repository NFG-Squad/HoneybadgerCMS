const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = function(app) {
  return app.locals.db.model('User', new Schema({ any: Schema.Types.Mixed }, { strict: false }));
};
