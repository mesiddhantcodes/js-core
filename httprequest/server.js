const https = require("https");
const fs = require("fs");


// api 
const api = "https://jsonplaceholder.typicode.com/todos/1";

// output file -> data stores
const outputFile = 'output.txt';

// Create a writable stream to save the response data to a file
const fileStream = fs.createWriteStream(outputFile);

// make get request -> request of api and gets the response
https.get(api, (response) => {

    if (response.statusCode != 200) {
        console.error("Request failed with status code ${response.statusCode}");
        return;
    }
    // Pipe the API response stream to the file stream
    response.pipe(fileStream);

    // event handling
    response.on('end', () => {
        console.log(`Data saved to ${outputFile}`);
    });

    fileStream.on('finish', () => {
        fileStream.close();
    });
    fileStream.on('error', (err) => {
        console.error('Error writing to the file:', err);
    });
}).on('error', (error) => {
    console.error(`Error retrieving data: ${error.message}`);
});



