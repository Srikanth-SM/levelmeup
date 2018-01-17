var levelMeUp = function(x, y, callback) {
    var result = "ALL YOUR " + x + " ARE BELONG TO " + y;
    callback(null, result);
}

module.exports = levelMeUp;