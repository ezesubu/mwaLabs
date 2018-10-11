var MongoClient = require('mongodb').MongoClient;

class Location {
   constructor(name, category, location){
       this.name = name;
       this.category = category
       this.location = location
   }
   
}
module.exports = Location