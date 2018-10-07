const GradeService = require('../services/grade.service');

class GradeController {
  all(req, res) {
    GradeService.all()
      .then(r => res
        .status(200)
        .json(r));
  }

  create(req, res) {
     GradeService
      .create(req.body)
      .then(r => res
        .status(201)
        .json(r));
  }

  update(req, res) {
    GradeService
     .update(req.params.id,req.body)
     .then(r => res
       .status(200)
       .json(r));
 }
 delete(req, res) {
  GradeService
   .delete(req.params.id)
   .then(r => res
     .status(200)
     .json(r));
}
}
module.exports = new GradeController();
