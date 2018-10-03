const Aggregate = require('./src/Aggregate');
const Select = require('./src/Select');
const Where = require('./src/Where');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.Select = Select;
  Array.prototype.Where = Where;
};

module.exports = bindAll;
