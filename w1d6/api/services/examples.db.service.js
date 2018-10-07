class ExamplesDatabase {
  constructor() {
    this._data = [];
    this._counter = 0;
    let student ={
      name: 'Asaad Saad', 
      course:'CS572',
      grade: 90
    }
    this.insert(student)
  }

  all() {
    return Promise.resolve(this._data);
  }

  byId(id) {
    return Promise.resolve(this._data[id]);
  }
  
  update(id,params){
    return Promise.resolve(this._data[id] = params);
  }

  delete(id){
    return Promise.resolve(delete this._data[id]);
  }

  insert(student) {
    const record = {
      id: this._counter,
      name: student.name,
      course: student.course,
      grade: student.grade
    };

    this._counter += 1;
    this._data.push(record);

    return Promise.resolve(record);
  }
}

module.exports = new ExamplesDatabase();
