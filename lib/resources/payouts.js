/**
 * @param {String} version version of API
 * @returns { Object } List of Payouts service endpoints
 */
module.exports = function payouts(version) {
    return {
        storeDetailAndSubmitThirdParty: {
            endpoint: `/Payout/${version}/storeDetailAndSubmitThirdParty`,
            required: [],
        },
        storeDetail: {
            endpoint: `/Payout/${version}/storeDetail`,
            required: [],
        },
        submitThirdParty: {
            endpoint: `/Payout/${version}/submitThirdParty`,
            required: [],
        },
        confirmThirdParty: {
            endpoint: `/Payout/${version}/confirmThirdParty`,
            required: [],
        },
        declineThirdParty: {
            endpoint: `/Payout/${version}/declineThirdParty`,
            required: [],
        },
        payout: {
            endpoint: `/Payout/${version}/payout`,
            required: [],
        },
    };
};
