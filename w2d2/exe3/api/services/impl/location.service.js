var model = require('../../location/location.model')
var zenodb = require('../../core/db')
var MongoClient = require('mongodb').MongoClient;
class LocationServiceImp {

  all() {
    return new Promise((resolve, reject) => {
      MongoClient.connect('mongodb://127.0.0.1:27017/mwa', function (err, client) {
        if (err) throw err;
        const db = client.db('mwa');
        db.collection('location').createIndex({location: '2d'});
        resolve(db.collection('location').find({"location":{$near: [-91.971925,41.0164653]}}).project({_id:0, name:1}).limit(3).toArray());
      })
    })
  }
  //ToDO GetByID
  // get(id) {

  // }
  insert(obj) {
    return new Promise((resolve, reject) => {
      MongoClient.connect('mongodb://127.0.0.1:27017/mwa', function (err, client) {
        if (err) throw err;
        const db = client.db('mwa');
        db.collection('location').insertOne(obj, function (err, data) {
          if (err) throw err;
          resolve(data);
          reject(err)
          client.close();
        })
      })
    })
  }

  update(id, obj) {
    return Location.update(id, obj)
  }

  delete(id) {
    return Location.delete(id)
  }
}

module.exports = new LocationServiceImp;
