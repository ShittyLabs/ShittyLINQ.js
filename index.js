const Aggregate = require('./src/Aggregate');
const Last = require('./src/Last');
const Prepend = require('./src/Prepend');
const Reverse = require('./src/Reverse');
const Select = require('./src/Select');
const TakeWhile = require('./src/TakeWhile');
const Union = require('./src/Union');
const Where = require('./src/Where');
const ElementAt = require('./src/ElementAt');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.Last = Last;
  Array.prototype.Prepend = Prepend;
  Array.prototype.Reverse = Reverse;
  Array.prototype.Select = Select;
  Array.prototype.TakeWhile = TakeWhile;
  Array.prototype.Union = Union;
  Array.prototype.Where = Where;
  Array.prototype.ElementAt = ElementAt;
};

module.exports = bindAll;
