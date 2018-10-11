const location = require('./impl/location.service');

class LocationService {
  all() {
    return location.all();
  }

  create(obj) {
    return location.insert(obj);
  }
  update(id, obj){
    return location.update(id,obj)
  }
  delete(id){
    return location.delete(id)
  }
}

module.exports = new LocationService();
