module.exports = {
    authorise: version => ({
        endpoint: `/Payment/${version}/authorise`,
        required: [],
    }),
    authorise3d: version => ({
        endpoint: `/Payment/${version}/authorise3d`,
        required: [],
    }),
    capture: version => ({
        endpoint: `/Payment/${version}/capture`,
        required: [],
    }),
    cancel: version => ({
        endpoint: `/Payment/${version}/cancel`,
        required: [],
    }),
    refund: version => ({
        endpoint: `/Payment/${version}/refund`,
        required: [],
    }),
    cancelOrRefund: version => ({
        endpoint: `/Payment/${version}/cancelOrRefund`,
        required: [],
    }),
    technicalCancel: version => ({
        endpoint: `/Payment/${version}/technicalCancel`,
        required: [],
    }),
    adjustAuthorisation: version => ({
        endpoint: `/Payment/${version}/adjustAuthorisation`,
        required: [],
    }),
};
