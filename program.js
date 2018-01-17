// var level = require('level');
// var levelMeUp = function(x, y, callback) {
//     var result = "ALL YOUR " + x + " ARE BELONG TO " + y;
//     callback(null, result);
// }


// end of exercise 1

//exercise 2
var level = require('level');

var levelMeUp = function(data, key, callback) {
    var db = level(data);
    db.get(key, (err, res) => {
        if (err) {
            callback(err);
        }
        callback(null, res);
    })
}














module.exports = levelMeUp;