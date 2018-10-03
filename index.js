const Select = require('./src/Select');

const bindAll = function() {
  Array.prototype.Select = Select;
};

module.exports = bindAll;
