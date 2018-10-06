const Aggregate = require('./src/Aggregate');
const GroupJoin = require('./src/GroupJoin');
const Last = require('./src/Last');
const Reverse = require('./src/Reverse');
const Select = require('./src/Select');
const Where = require('./src/Where');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.GroupJoin = GroupJoin;
  Array.prototype.Last = Last;
  Array.prototype.Reverse = Reverse;
  Array.prototype.Select = Select;
  Array.prototype.Where = Where;
};

module.exports = bindAll;
