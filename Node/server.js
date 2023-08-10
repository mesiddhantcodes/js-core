
const http = require("http");
const fs=require("fs");

const receptor = function (request, response) {
    // this receptor function is knwon as recepsionist 
    const url=request.url;
    const method=request.method;

    if(method==="GET")
    {
        if(url==="/")
        {
            response.writeHead(200,{
                "Content-Type":"text/html"
             });
           fs.readFile("./indd.html","utf-8",function(err,data)
           {
                if(err)
                {
                    response.end("erroe");
                }
                else{
                    response.end(data);
                }
           });
        }
        else if (url==="/about")
        {
            fs.readFile("./about.html","utf-8",function(err,data)
            {
                if(err)
                {
                    response.end("errrr");
                }                
                else{
                    response.end(data);
                }
            });
        }
        else if (url==="/style.css")
        {
            response.writeHead(200,
                {
                    "Content-type":"text/css"
                });
            fs.readFile("./style.css","utf-8",function(err,data)
            {
                if(err)
                {
                    response.end("dfddfbfdbiuf");
                }
                else{
                    response.end(data);
                }
            });

        }
        else{
            response.writeHead(404);
            response.end("404");
        }
    }
    else{
        response.end("NOT handles");
    }
    // console.log("requrest",request.url,request.method);
    // response.end("heloooeo");
};

const server = http.createServer(receptor);

server.listen(3000, function () {
    console.log("Server is listeniing on port 3000 ")
});


