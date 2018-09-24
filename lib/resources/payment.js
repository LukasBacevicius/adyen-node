/**
 * @param {String} version version of API
 * @returns { Object } List of Payments service endpoints
 */
module.exports = function payment(version) {
    return {
        authorise: {
            endpoint: `/Payment/${version}/authorise`,
            required: [],
        },
        authorise3d: {
            endpoint: `/Payment/${version}/authorise3d`,
            required: [],
        },
        capture: {
            endpoint: `/Payment/${version}/capture`,
            required: [],
        },
        cancel: {
            endpoint: `/Payment/${version}/cancel`,
            required: [],
        },
        refund: {
            endpoint: `/Payment/${version}/refund`,
            required: [],
        },
        cancelOrRefund: {
            endpoint: `/Payment/${version}/cancelOrRefund`,
            required: [],
        },
        technicalCancel: {
            endpoint: `/Payment/${version}/technicalCancel`,
            required: [],
        },
        adjustAuthorisation: {
            endpoint: `/Payment/${version}/adjustAuthorisation`,
            required: [],
        },
    }
};
