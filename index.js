const Aggregate = require('./src/Aggregate');
const Select = require('./src/Select');
const Where = require('./src/Where');
const TakeWhile = require('./src/TakeWhile');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.Select = Select;
  Array.prototype.Where = Where;
  Array.prototype.TakeWhile = TakeWhile;
};

module.exports = bindAll;
