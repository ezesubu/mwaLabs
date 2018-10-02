// 1. why do we want sometimes to use setImmediate inteand using SetTimeOut

// the "immediate" execution of the callback after I/O events' callbacks. this means sometimes after to
// settings or I/0 conextions we need call a function need params from the before callbacks

// 2.Explain the difference between process.nextTick and setImmediate

// process.nextTick This is not a simple alias to setTimeout(fn, 0). It is much more efficient. It runs before any additional I/O events (including timers) fire in subsequent ticks of the event loop.
// and setImmediate Schedules the "immediate" execution of the callback after I/O events' callbacks.

// 3.
// a - Crypto
// b - http
// c - Debugger
// d - Errors
// e - Events
// f - File System
// g - Stream
// h - Timers
// i - V8
// j - Path
// k - Modules

// setTimeout(()=> console.log("hello world time out"), 3.5);
// setImmediate(()=> console.log("hello world inmmediatle"));
// process.nextTick(()=> console.log("hello world nextTick"));
Array.prototype.event = function(){
    const s = this;
   process.nextTick(() => {
     let arr = s.filter((val) => val % 2 == 0)
     console.log(arr);
   })
}
Array.prototype.odd= function(){
    var s = this;
    setImmediate(()=> {
        let arr = s.filter((val) => val % 2 !== 0)
     console.log(arr);
    })
}
console.log('Start');
[1,2,3,4,5,6,7,8].event();
[1,2,3,4,5,6,7,8].odd();
console.log('end')
