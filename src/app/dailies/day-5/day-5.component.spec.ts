/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Day5Component } from './day-5.component';

describe('Day5Component', () => {
  let component: Day5Component;
  let fixture: ComponentFixture<Day5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
