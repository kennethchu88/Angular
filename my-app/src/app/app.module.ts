import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavigaionbarComponent } from './navigaionbar/navigaionbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { DeveloperComponent } from './developer/developer.component';
import { DeveloperFormComponent } from './developer-form/developer-form.component';
import { DeveloperInfoComponent } from './developer-info/developer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigaionbarComponent,
    TopbarComponent,
    HomeComponent,
    DeveloperComponent,
    DeveloperFormComponent,
    DeveloperInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
