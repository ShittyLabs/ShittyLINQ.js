const Aggregate = require('./src/Aggregate');
const All = require('./src/All');
const Concat = require('./src/Concat');
const ElementAt = require('./src/ElementAt');
const First = require('./src/First');
const Last = require('./src/Last');
const Prepend = require('./src/Prepend');
const Reverse = require('./src/Reverse');
const Select = require('./src/Select');
const TakeWhile = require('./src/TakeWhile');
const ToDictionary = require('./src/ToDictionary');
const Union = require('./src/Union');
const Where = require('./src/Where');
const Sum = require('./src/Sum');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.All = All;
  Array.prototype.Concat = Concat;
  Array.prototype.ElementAt = ElementAt;
  Array.prototype.First = First;
  Array.prototype.Last = Last;
  Array.prototype.Prepend = Prepend;
  Array.prototype.Reverse = Reverse;
  Array.prototype.Select = Select;
  Array.prototype.TakeWhile = TakeWhile;
  Array.prototype.ToDictionary = ToDictionary;
  Array.prototype.Union = Union;
  Array.prototype.Where = Where;
  Array.prototype.Sum = Sum;
};

module.exports = bindAll;
