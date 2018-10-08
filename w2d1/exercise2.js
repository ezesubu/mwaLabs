var MongoClient = require('mongodb').MongoClient;
var crypto = require('crypto');
const express = require('express');
const app = express();
app.listen(3000, (e) => console.log('Server Runing...'))
app.get('/secret', function (req, res) {
    MongoClient.connect('mongodb://127.0.0.1:27017/mwa', function (err, client) {
        if (err) throw err;
        const db = client.db('mwa');
        db.collection('homework7').findOne({}, function (err, doc) {
            if (err) throw err;
            res.json(decrypt(doc.message));
            client.close();
        })


    })
})

function decrypt(text) {
    var decipher = crypto.createDecipher('aes256', 'asaadsaad');
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');

    return dec;
}