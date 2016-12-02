import { Component, OnInit } from '@angular/core';
import { Box } from './box';

@Component({
  selector: 'app-day-2',
  templateUrl: './day-2.component.html',
  styleUrls: ['./day-2.component.css']
})
export class Day2Component implements OnInit {
  public boxes: Box[] = [];
  generateCircle() {
    let box = new Box();
    this.boxes.push(box);
  }

  constructor() {}

  ngOnInit() {
  }

}
