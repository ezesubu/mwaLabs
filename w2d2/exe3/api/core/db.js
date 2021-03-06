    'use strict';

const
    constants = require('../core/constants'),
    mongoClient = require('mongodb').MongoClient;
function open(){

    // Connection URL. This is where your mongodb server is running.
    let url = constants.URL;
    return new Promise((resolve, reject)=>{
        // Use connect method to connect to the Server
        mongoClient.connect(url, (err, db) => {
            if (err) {
                reject(err);
            } else {
                resolve(db);
            }
        });
    });
}

function close(db){
    if(db){
        db.close();
    }
}

let db = {
    open : open,
    close: close
}

module.exports = db;