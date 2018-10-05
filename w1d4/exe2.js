const os = require('os');
const { Observable } = require("rxjs");

function checkSystem(){
   
}
const obs = Observable.create(function (observer) {
    console.log('Checking your System...');
    if(os.freemem() < 400000000){
        console.log('This app needs at least 4 GB of RAM')
    }
   if(os.cpus().length < 2){
       return(console.error('Processor not supported'));
   }
    console.log('System is checked successfully')
  });
  obs.subscribe();