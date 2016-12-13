import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthService } from '../../auth/services/auth-service'

@Component({
  selector: 'app-day-6',
  templateUrl: './day-6.component.html',
  styleUrls: ['./day-6.component.css']
})
export class Day6Component implements OnInit {

  currentList: FirebaseListObservable<any[]>;
  currentObject: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire, private auth: AuthService) { 
    this.currentList = af.database.list('/current');
    this.currentObject = af.database.object('/current');
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
}
