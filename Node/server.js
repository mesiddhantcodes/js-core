
const http = require("http");
const fs = require("fs");
const { todo } = require("node:test");
const { emitKeypressEvents } = require("readline");

const receptor = function (request, response) {
    // this receptor function is knwon as recepsionist 
    const url = request.url;
    const method = request.method;

    if (method === "GET") {
        if (url === "/") {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            fs.readFile("./todo.html", "utf-8", function (err, data) {
                if (err) {
                    response.end("erroe");
                }
                else {
                    response.end(data);
                }
            });
        }
        else if (url === "/about") {
            fs.readFile("./about.html", "utf-8", function (err, data) {
                if (err) {
                    response.end("errrr");
                }
                else {
                    response.end(data);
                }
            });
        }
        else if (url === "/style.css") {
            response.writeHead(200,
                {
                    "Content-type": "text/css"
                });
            fs.readFile("./style.css", "utf-8", function (err, data) {
                if (err) {
                    response.end("dfddfbfdbiuf");
                }
                else {
                    response.end(data);
                }
            });
        }
        else if(url==="/todo")
        {
            fs.readFile("./todo.json","utf-8",function(err,data)
            {
                if(err)
                {
                    console.log("erropr");
                }
                response.end(data);
            })
        }
        else {
            response.writeHead(404);
            response.end("404");
        }
    }
    else {
        if (url === "/todo") {
            getdatafromrequest(request, function (body) {
                const todooo=formatdatatodo(body);

                savetodoinfile(todooo,function()
                {
                    response.writeHead(200,
                        {
                            "Content-type": "application/json"
                        });
                });
                response.end(JSON.stringify(todooo));
            });
        }
    }
    // console.log("requrest",request.url,request.method);
    // response.end("heloooeo");
};

const server = http.createServer(receptor);

server.listen(3000, function () {
    console.log("Server is listeniing on port 3000 ")
});

function getdatafromrequest(request, callback) {
    let body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", function () {
        callback(body);
        // response.end("done");
    });
}


function formatdatatodo(body) {
    const todostring = body.split("&");
    const todoobject = {};
    todostring.forEach(function (todos) {
        const todoarr = todos.split("=");
        todoobject[todoarr[0]] = todoarr[1];

    });
    return todoobject;
}


function savetodoinfile(todooo,callback)
{
    // fs.writeFile("./todo.json",JSON.stringify(todooo),function(err)
    // {
    //     if(err)
    //     {
    //         console.log("error",err);
    //         throw err;
    //     }
    //     callback(); 
    // })
    // this function overwrite the json file with newly data
    // --------------------------------------------------
    fs.readFile("./todo.json","utf-8",function(err,data)
    {
        if(err)
        {
            throw err;
        }
        else{
            const tosid=JSON.parse(data);
            tosid.push(todooo);
            fs.writeFile("./todo.json",JSON.stringify(tosid),function(err)
            {
                if(err)
                {
                    callback(err);
                }
                else{
                    callback(null);
                }
            });
        }
    });
}

