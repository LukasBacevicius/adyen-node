const keys = require('./keys');
const AdyenNode = require('../lib/index');

const config = {
    url: 'https://pal-test.adyen.com/pal/servlet',
    login: keys.adyenLogin,
    password: keys.adyenPassword,
    versions: {
        payment: 'v30',
        recurring: 'v25',
        payouts: 'v30',
    },
};

test('Expect client to have auth, versions and baseUrl properties', () => {
    const client = AdyenNode(config);

    expect(client).toHaveProperty('auth')
    expect(client).toHaveProperty('versions')
    expect(client).toHaveProperty('baseUrl');
});
