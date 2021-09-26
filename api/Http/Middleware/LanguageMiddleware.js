/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
const lang = (req, res, next) => {
    switch (req.headers['accept-language']) {
        case 'es':
            req.lang = 'es';
            break;
        default:
            req.lang = 'en';
    }
    return next();
};

module.exports = lang;
