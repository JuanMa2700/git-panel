/**
 *
 * @param fn
 * @returns {Function}
 */
const wrapper = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

/**
 *
 * @param namespace
 * @param method
 * @returns {Function}
 */
const resolver = (namespace, method) =>
    wrapper(async (req, res, next) => {
        const ClassName = require(`../${namespace}`);
        return await new ClassName(req, res, next)[method]();
    });

/**
 *
 * @param requestName
 * @param method
 * @returns {Function}
 */
const request = (requestName, method = 'check') =>
    resolver(`Requests/${requestName}`, method);

/**
 *
 * @param controllerName
 * @param method
 * @returns {Function}
 */
const controller = (controllerName, method = 'action') =>
    resolver(`Controllers/${controllerName}`, method);

/**
 *
 * @param middlewareName
 * @param method
 * @returns {Function}
 */
const middleware = (middlewareName, method = 'action') =>
    resolver(`Middleware/${middlewareName}`, method);

module.exports = {
    request,
    controller,
    middleware,
};
