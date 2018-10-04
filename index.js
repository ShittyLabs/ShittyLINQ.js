const Aggregate = require('./src/Aggregate');
const Select = require('./src/Select');
const Where = require('./src/Where');
const Except = require('./src/Except');
const Distinct = require('./src/Distinct');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.Select = Select;
  Array.prototype.Where = Where;
  Array.prototype.Except = Except;
  Array.prototype.Distinct = Distinct;
};

module.exports = bindAll;
