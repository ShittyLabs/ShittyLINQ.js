const Aggregate = require('./src/Aggregate');
const Select = require('./src/Select');
const Where = require('./src/Where');
const Last = require('./src/Last');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.Select = Select;
  Array.prototype.Where = Where;
  Array.prototype.Last = Last;
};

module.exports = bindAll;
