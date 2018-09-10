import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {TictactoeComponent} from './tictactoe/tictactoe.component';
import {RpsComponent} from './rps/rps.component';
import {TogetherjsComponent} from './togetherjs/togetherjs.component';



const routes: Routes = [
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'tictactoe',
  component: TictactoeComponent
},
{
  path: 'rps',
  component: RpsComponent
},
{
  path: 'togetherjs',
  component: TogetherjsComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
