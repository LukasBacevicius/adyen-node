/**
 * @param {String} version version of API
 * @returns { Object } List of Recurring service endpoints
 */
module.exports = function recurring(version) {
    return {
        listRecurringDetails: {
            endpoint: `/Recurring/${version}/listRecurringDetails`,
            required: [],
        },
        disable: {
            endpoint: `/Recurring/${version}/disable`,
            required: [],
        },
    }
};
