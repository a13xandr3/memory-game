import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameOverComponent } from './game-over/game-over.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'game-over', component: GameOverComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
