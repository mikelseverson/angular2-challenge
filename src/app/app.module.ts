import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Day1Component, 
         Day2Component, 
         Day3Component, 
         Day4Component, 
         Day5Component,
         Day6Component} from './dailies/index';
         
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyCAThvlKvEXqy0nM6oQPm_wLLZdCpIQzUM",
  authDomain: "particlesensor.firebaseapp.com",
  databaseURL: "https://particlesensor.firebaseio.com",
  storageBucket: "particlesensor.appspot.com",
  messagingSenderId: "748694046544"
};

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    Day2Component,
    Day3Component,
    Day4Component,
    Day5Component,
    Day6Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
