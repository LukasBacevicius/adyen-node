const axios = require('axios');

class Client {
    constructor(config) {
        this.baseUrl = config.url;

        this.auth = {
            login: config.login,
            password: config.password,
        };

        this.createRequest();
    }

    authentication(request) {
        request.headers.Authorization = Object.values(this.auth).join(':');

        return request;
    }

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

    async makeRequest(parameters, endpoint) {
        const request = this.authentication(this.createRequest(parameters, endpoint));
        const composeResponse = (data, success) => ({ success, data });

        try {
            const response = await axios(request);

            return composeResponse(response.data, true);
        } catch (error) {
            return composeResponse(error.data, false);
        }
    }
}

module.exports.Client = Client;
