const Select = require('./src/select');

const bindAll = function() {
  Array.prototype.Select = Select;
};

module.exports = bindAll;
