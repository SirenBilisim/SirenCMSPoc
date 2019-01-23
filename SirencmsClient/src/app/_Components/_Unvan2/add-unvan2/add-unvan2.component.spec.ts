import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnvan2Component } from './add-unvan2.component';

describe('AddUnvan2Component', () => {
  let component: AddUnvan2Component;
  let fixture: ComponentFixture<AddUnvan2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUnvan2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnvan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
