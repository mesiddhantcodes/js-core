const fs = require("fs")

function readFileaftertime(time, callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            fs.readFile("./output.txt", "utf-8", (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        }, time);
    })

}
readFileaftertime(2000).then(function (data) {
    console.log("data", data);
}).catch(function (err) {
    console.log("erorr", err);
});


readFileaftertime(2000, function (err, data) {
});