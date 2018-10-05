const http = require('http');
const url = require('url')
const {fork} = require('child_process');
const server = http.createServer().listen(4000);

server.on('request', (req, res) =>{
    const myUrl = url.parse(req.url, true);
    // var format = myUrl.format();
    const childProcess = fork('w1d4/analiseTxt.js')
    childProcess.send(myUrl.query.url);
    //childProcess.send('start');
    //   console.log(childProcess)
    childProcess.on('message', (msg) => {
        res.end(msg);
    })
    //console.log(myUrl.query.url);
})