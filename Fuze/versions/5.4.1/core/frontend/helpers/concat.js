const {SafeString} = require('../services/handlebars');

// module.exports = function concat(options) {
//     options = options || {};
//     options.hash = options.hash || {};
//     options.data = options.data || {};
//     return new SafeString(...options);
// };

module.exports = function concat(...args) {
    const options = args.pop();
    const separator = options.hash.separator || '';

    return new SafeString(args.join(separator));
};
