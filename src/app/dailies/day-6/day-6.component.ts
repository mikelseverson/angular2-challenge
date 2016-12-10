import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-day-6',
  templateUrl: './day-6.component.html',
  styleUrls: ['./day-6.component.css']
})
export class Day6Component implements OnInit {
  current: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) { 
    this.current = af.database.list('/current');
  }

  ngOnInit() {
  }

}
