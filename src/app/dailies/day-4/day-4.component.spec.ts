/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Day4Component } from './day-4.component';

describe('Day4Component', () => {
  let component: Day4Component;
  let fixture: ComponentFixture<Day4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
