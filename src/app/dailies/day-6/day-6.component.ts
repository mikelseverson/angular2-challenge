import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-day-6',
  templateUrl: './day-6.component.html',
  styleUrls: ['./day-6.component.css']
})
export class Day6Component implements OnInit {
  constructor(af: AngularFire) { 

  currentList: FirebaseListObservable<any[]>;
  currentObject: FirebaseObjectObservable<any>;

    this.currentList = af.database.list('/current');
    this.currentObject = af.database.object('/current');
  }

  ngOnInit() {
  }

}
