import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }
  getData() {
   return [{'_id' : 1, game: {name: 'Rowin', schedule: [{'stadiun': '', date: '', time:''}]}}];
  }
}
