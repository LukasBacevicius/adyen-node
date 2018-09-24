const Client = require('./client');

const payment = require('./resources/payment');
const payouts = require('./resources/payouts');
const recurring = require('./resources/recurring');

/**
 * @class Adyen
 * @extends {Client}
 * @constructor
 * @param { Object } config Config for creating client
 * @param { String } config.url Adyen API's base url
 * @param { String } config.login   Login email
 * @param { String } config.password    Password
 * @param { Object } config.versions Object holding versions for different API services
 * @param { String } config.versions.payment Vesion of Payment API
 * @param { String } config.versions.recurring Vesion of Recurring API
 * @param { String } config.versions.payouts Vesion of Payouts API
 */
class Adyen extends Client {
    constructor(config) {
        super(config);

        this.config = config;

        this.generateResources();
    }

    /**
     * @method
     * @description Dynamically create & add API methods for every endpoint/service
     * @memberof Adyen
     */
    generateResources() {
        const adyenResources = {
            payment: payment(this.config.versions.payment),
            payouts: payouts(this.config.versions.payouts),
            recurring: recurring(this.config.versions.recurring),
        };

        const resourcesObject = {};

        Object.keys(adyenResources).forEach((resourceGroupName) => {
            resourcesObject[resourceGroupName] = {};

            const currentGroup = adyenResources[resourceGroupName];

            Object.keys(currentGroup).forEach((resourceName) => {
                const spec = currentGroup[resourceName];

                resourcesObject[resourceGroupName][resourceName] = async (parameters) => {
                    const response = await this.makeRequest(parameters, spec.endpoint);

                    return response;
                };
            });
        });

        Object.assign(this, resourcesObject);
    }
}

module.exports = Adyen;
