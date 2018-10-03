const Aggregate = require('./src/Aggregate');
const Last = require('./src/Last');
const Reverse = require('./src/Reverse');
const Select = require('./src/Select');
const Where = require('./src/Where');
const OrderBy = require('./src/OrderBy');
const OrderByDescending = require('./src/OrderByDescending');
const Reverse = require('./src/Reverse');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.Last = Last;
  Array.prototype.Reverse = Reverse;
  Array.prototype.Select = Select;
  Array.prototype.Where = Where;
  Array.prototype.OrderBy = OrderBy;
  Array.prototype.OrderByDescending = OrderByDescending;
  Array.prototype.Reverse = Reverse;
};

module.exports = bindAll;
