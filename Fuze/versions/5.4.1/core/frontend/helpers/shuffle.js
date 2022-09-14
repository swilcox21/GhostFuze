// const {SafeString} = require('../services/handlebars');

module.exports = function shuffle(input) {
    for (var i = input.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = input[i];
        input[i] = input[j];
        input[j] = temp;
    }
}
// return new SafeString(input);