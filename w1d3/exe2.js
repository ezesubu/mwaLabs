const fs = require('fs');
const server = require('http').createServer();


// server.on('request', (req, res) => {
//     fs.readFile(__dirname + '/200MB.zip' , (err, data) => {
//       if (err) throw err;    
//       res.end(data);
//       console.log("Done!")
//     });
//      }).listen(8080,'127.0.0.1');
//----------------------------------------
//The downloads start and takes aprox 4 segs is sync, consume a lot o memory
//-----------------------------------------
// server.on('request', (req, res) => {
//     fs.readFileSync(__dirname + '/200MB.zip' , (err, data) => {
//       if (err) throw err;    
//       res.end(data);
//     });
//     console.log("Donde Sync");
//    }).listen(8080,'127.0.0.1');
// ----------------------------------
// Never download the File, the navegator is waiting
// ----------------------------------
server.on('request', (req, res) => {
    fs.createReadStream(__dirname + '/200MB.zip' ).pipe(res);
    console.log("Done Stream");
  }).listen(8080,'127.0.0.1');
  //----------------------------------------
//The downloads start and start aprox 5 segs but not consume much memory
//-----------------------------------------