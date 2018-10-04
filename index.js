const Aggregate = require('./src/Aggregate');
const Select = require('./src/Select');
const Where = require('./src/Where');
const All = require('./src/All');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.Select = Select;
  Array.prototype.Where = Where;
  Array.prototype.All = All;
};

module.exports = bindAll;
