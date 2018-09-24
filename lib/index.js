const Adyen = require('./adyen');

module.exports = function createClient(config) {
    return new Adyen(config);
};
