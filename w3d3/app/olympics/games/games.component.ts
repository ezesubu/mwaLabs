import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-games',
  template: `hola mundo
  <div *ngFor='let olympyic of olympics'>
                    <div *ngFor='let games of olympics'>
                      {{games.game.name}}
                    </div>
                      </div>`
})
export class GamesComponent implements OnInit {
  olympics: Array<Object>;
  constructor(private dbService: DbService) { }

  ngOnInit() {
    console.log('entrando');
    this.olympics = this.dbService.getData();
  }

}
