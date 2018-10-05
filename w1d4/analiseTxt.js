const fs = require('fs')
const analiseTxt = (msg) =>{   
  return fs.readFileSync(__dirname + '/' + msg, 'utf8');
}
process.on('message', (msg) => {   
    let resp = new Promise(function(resolve){
        resolve(analiseTxt(msg))
      });
      resp.then(e => {
        process.send(e)
      })
    
})
