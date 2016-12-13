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

import { AuthModule, SignInComponent, AuthService } from './auth/index';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyCAThvlKvEXqy0nM6oQPm_wLLZdCpIQzUM",
  authDomain: "particlesensor.firebaseapp.com",
  databaseURL: "https://particlesensor.firebaseio.com",
  storageBucket: "particlesensor.appspot.com",
  messagingSenderId: "748694046544"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    Day2Component,
    Day3Component,
    Day4Component,
    Day5Component,
    Day6Component,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
