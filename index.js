const Aggregate = require('./src/Aggregate');
const Select = require('./src/Select');
const Where = require('./src/Where');
const TakeLast = require('./src/TakeLast');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.Select = Select;
  Array.prototype.Where = Where;
  Array.prototype.TakeLast = TakeLast;
};

module.exports = bindAll;
