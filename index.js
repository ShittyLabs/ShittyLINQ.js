const Aggregate = require('./src/Aggregate');
const Select = require('./src/Select');
const Where = require('./src/Where');
const Count = require('./src/Count');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.Select = Select;
  Array.prototype.Where = Where;
  Array.prototype.Count = Count;
};

module.exports = bindAll;
