const dns = require('dns');
const {promisify} = require('util')
const { from } = require("rxjs");
let ipSync = promisify(dns.resolve4);
//Promise
let promise = ipSync('www.mum.edu').then(
    (r)=> r
)
//Async
async function ipResolve(){
    let response = await ipSync('mum.edu')
    console.log("The ip:", response)
}

ipResolve();

//Observable
from(promise).subscribe((e) => console.log(e), null ,() => console.log('Finish'));
