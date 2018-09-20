module.exports = {
    storeDetailAndSubmitThirdParty: version => ({
        endpoint: `/Payout/${version}/storeDetailAndSubmitThirdParty`,
        required: [],
    }),
    storeDetail: version => ({
        endpoint: `/Payout/${version}/storeDetail`,
        required: [],
    }),
    submitThirdParty: version => ({
        endpoint: `/Payout/${version}/submitThirdParty`,
        required: [],
    }),
    confirmThirdParty: version => ({
        endpoint: `/Payout/${version}/confirmThirdParty`,
        required: [],
    }),
    declineThirdParty: version => ({
        endpoint: `/Payout/${version}/declineThirdParty`,
        required: [],
    }),
    payout: version => ({
        endpoint: `/Payout/${version}/payout`,
        required: [],
    }),
};
