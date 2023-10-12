const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');

});

app.get('/events', (req, res) => {

    res.setHeader('Content-Type', 'text/event-stream');
    send(res);
});
let i = 0;
function send(res) {
    res.write('data: ' +` helllow ------[${i++}]\n\n`);
    setTimeout(() => {
        send(res);
    }, 10000);
}
app.listen(3000, () => console.log('Listening on port 3000'));

