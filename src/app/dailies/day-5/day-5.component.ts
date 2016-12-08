import { Component, OnInit } from '@angular/core';
import { NumberService } from './number.service';

@Component({
  selector: 'app-day-5',
  templateUrl: './day-5.component.html',
  styleUrls: ['./day-5.component.css'],
  providers: [NumberService]
})
export class Day5Component implements OnInit {
  number: Number;
  constructor(private numberService: NumberService) { }

  ngOnInit() {
    this.getNumber();
  }
  getNumber(): void {
    this.numberService.getNumber().then(number => {this.number = number});
  }
  addNumber(): void {
    this.numberService.addNumber();
  }
  removeNumber(): void {
    this.numberService.removeNumber();
  }

}
