import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { RpsComponent } from './rps/rps.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ScoreService } from './services/score.service';
import { ApiComponent } from './api/api.component';
import { TogetherjsComponent } from './togetherjs/togetherjs.component';
import { PixijsComponent } from './pixijs/pixijs.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TictactoeComponent,
    HomeComponent,
    RpsComponent,
    ScoreboardComponent,
    ApiComponent,
    TogetherjsComponent,
    PixijsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
