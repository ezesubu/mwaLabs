const Service = require('../services/location.service');

class Controller{
  all(req, res) {
    Service.all(req.params)
    .then(r => res
      .status(200)
      .json(r));
  }

  create(req, res) {
    Service.create(req.body)
    .then(r => res
      .status(200)
      .json(r));
  }

  update(req, res) {
    Service.update(req.params.id,req.body)
     .then(r => res
       .status(200)
       .json(r));
 }
 delete(req, res) {
  Service.delete(req.params.id)
   .then(r => res
     .status(200)
     .json(r));
  }
}
module.exports = new Controller();
