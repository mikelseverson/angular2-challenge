import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-day-6',
  templateUrl: './day-6.component.html',
  styleUrls: ['./day-6.component.css']
})
export class Day6Component implements OnInit {

  currentList: FirebaseListObservable<any[]>;
  currentObject: FirebaseObjectObservable<any>;

  constructor(public af: AngularFire) { 
    this.currentList = af.database.list('/current');
    this.currentObject = af.database.object('/current');
    this.af.auth.subscribe(auth => console.log(auth));
  }

  ngOnInit() { }

  addItem(newName: string) {
    this.currentList.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.currentList.update(key, { text: newText });
  }
  deleteItem(key: string) {    
    this.currentList.remove(key); 
  }
  deleteEverything() {
    this.currentList.remove();
  }
  login() {
    this.af.auth.login();
  }
  logout() {
    this.af.auth.logout();
  }

}
