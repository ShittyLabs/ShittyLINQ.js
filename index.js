const Aggregate = require('./src/Aggregate');
const Select = require('./src/Select');
const Where = require('./src/Where');
const Empty = require('./src/Empty')

const bindAll = function() {
    Array.prototype.Aggregate = Aggregate;
    Array.prototype.Select = Select;
    Array.prototype.Where = Where;
    Array.Empty = Empty;
};

module.exports = bindAll;