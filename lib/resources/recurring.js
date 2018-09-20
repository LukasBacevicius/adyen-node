module.exports = {
    listRecurringDetails: version => ({
        endpoint: `/Recurring/${version}/listRecurringDetails`,
        required: [],
    }),
    disable: version => ({
        endpoint: `/Recurring/${version}/disable`,
        required: [],
    }),
};
