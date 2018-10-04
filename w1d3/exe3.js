const EventEmitter = require('events');

class GYM extends EventEmitter {}

const athlete = new GYM();
athlete.on('go', () => {
  console.log('Athlete is working Out!');
});
function fnEmiter(){
    athlete.emit('go');
}
setInterval(fnEmiter,1000);