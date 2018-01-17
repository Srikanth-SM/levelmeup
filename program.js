// var level = require('level');
// var levelMeUp = function(x, y, callback) {
//     var result = "ALL YOUR " + x + " ARE BELONG TO " + y;
//     callback(null, result);
// }


// end of exercise 1

//exercise 2
// var level = require('level');

// var levelMeUp = function(data, key, callback) {
//     var db = level(data);
//     db.get(key, (err, res) => {
//         if (err) {
//             callback(err);
//         }
//         callback(null, res);
//     })
// }

var level = require('level');

var levelMeUp = function(database, callback) {
    var db = level(database);
    var error;
    var result = [];
    db.on('error', (err) => {
        error = err;
    })
    var getData = function(i) {
        var key = 'key' + i;
        db.get(key, (err, res) => {
            if (err) {
                console.log("bang", err);
                // error = err;
            } else {
                result.push(res);
            }
            if (i <= 99 && !error) {
                getData(i + 1);
            } else {
                db.close((err) => {
                    console.log("error print ", error || err, result);
                    callback(null, result)
                })
            }
        })

    }
    getData(1 - 1);

}












module.exports = levelMeUp;