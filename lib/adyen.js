const Client = require('./client');

const payment = require('./resources/payment');
const payouts = require('./resources/payouts');
const recurring = require('./resources/recurring');

class Adyen extends Client {
    constructor(config) {
        super(config);

        this.config = config;

        this.generateResources();
    }

    generateResources() {
        const adyenResources = {
            payment: payment(this.config.versions.payment),
            payouts: payouts(this.config.versions.payouts),
            recurring: recurring(this.config.versions.recurring),
        };

        Object.keys(adyenResources).forEach((resourceGroupName) => {
            this[resourceGroupName] = {};

            const currentGroup = adyenResources[resourceGroupName];

            Object.keys(currentGroup).forEach((resourceName) => {
                const spec = currentGroup[resourceName];

                this[resourceGroupName][resourceName] = async (parameters) => {
                    const response = await this.method(parameters, spec);

                    return response;
                };
            });
        });
    }

    async method(parameters, spec) {
        const data = { ...parameters, merchantAccount: this.config.merchantAccount };

        const response = await this.makeRequest(data, spec.endpoint);

        return response;
    }
}

module.exports = Adyen;
