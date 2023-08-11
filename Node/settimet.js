const fs = require("fs")

function readFileaftertime(time, callback) {
    setTimeout(function () {
        fs.readFile("./output.txt", "utf-8", (err, data) => {
            if (err) {
                callback(err);
            }
            else {
                callback(null, data);
            }
        });
    }, time);
}

readFileaftertime(2000, function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});