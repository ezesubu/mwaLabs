import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GamesComponent } from './olympics/games/games.component';


const routes: Routes = [
  { path: 'games', component: GamesComponent},
  // { path: 'games/1', component: GamesComponent },
  { path: '**', redirectTo: 'games'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
