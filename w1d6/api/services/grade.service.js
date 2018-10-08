const dbService = require('./examples.db.service');

class GradeService {
  all() {
    return dbService.all();
  }

  create(student) {
    return dbService.insert(student);
  }
  update(id, student){
    return dbService.update(id,student)
  }
  delete(id){
    return dbService.delete(id)
  }
}

module.exports = new GradeService();
