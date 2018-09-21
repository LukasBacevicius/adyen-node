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
