/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Day6Component } from './day-6.component';

describe('Day6Component', () => {
  let component: Day6Component;
  let fixture: ComponentFixture<Day6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
