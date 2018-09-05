import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { RpsComponent } from './rps/rps.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ScoreService } from './services/score.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TictactoeComponent,
    HomeComponent,
    RpsComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
