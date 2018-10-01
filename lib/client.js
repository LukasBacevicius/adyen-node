const axios = require('axios');

/**
 * @class Client
 * @constructor
 * @param { Object } config Config for creating client
 * @param { String } config.url Adyen API's base url
 * @param { String } config.login   Login email
 * @param { String } config.password    Password
 */
class Client {
    constructor(config) {
        this.baseUrl = config.url.replace(/\/$/, '');

        this.auth = {
            login: config.login,
            password: config.password,
        };
    }

    /**
     * @method
     * @param { Object } request
     * @returns { Object } request with authentication
     * @memberof Client
     */
    authentication(request) {
        request.headers['Authorization'] = `Basic ${Buffer.from(Object.values(this.auth).join(':')).toString('base64')}`;
        return request;
    }
    
    /**
     * @method
     * @param { Object } parameters
     * @param { String } endpoint
     * @returns request object
     * @memberof Client
     */
    createRequest(parameters, endpoint) {
        return {
            method: 'post',
            url: `${this.baseUrl}${endpoint}`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: parameters,
            timeout: 20000,
        };
    }

    /**
     * @method
     * @param { Object } parameters
     * @param { String } endpoint
     * @returns response from API
     * @memberof Client
     */
    async makeRequest(parameters, endpoint) {
        const request = this.authentication(this.createRequest(parameters, endpoint));
        const composeResponse = (data, success) => ({ success, data });

        try {
            const response = await axios(request);

            return composeResponse(response, true);
        } catch (error) {
            return composeResponse(error.response, false);
        }
    }
}

module.exports = Client;
