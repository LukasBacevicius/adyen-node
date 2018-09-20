const Client = require('./client');

const payments = require('./resources/payment');
const payouts = require('./resources/payouts');
const recurring = require('./resources/recurring');

const resources = { ...payments, ...payouts, ...recurring };

class Adyen extends Client {
    constructor(config) {
        super(config);

        this.config = config;
    }

    async service(resourceName, parameters) {
        const response = await this.method(parameters, resources[resourceName](this.config.version));

        return response;
    }

    async method(parameters, spec) {
        const data = { ...parameters, merchantAccount: this.config.merchantAccount };

        const response = await this.makeRequest(data, spec.endpoint);

        return response;
    }
}

module.exports.Adyen = Adyen;
