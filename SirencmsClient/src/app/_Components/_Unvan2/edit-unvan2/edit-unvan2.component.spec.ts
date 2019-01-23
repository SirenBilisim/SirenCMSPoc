import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnvan2Component } from './edit-unvan2.component';

describe('EditUnvan2Component', () => {
  let component: EditUnvan2Component;
  let fixture: ComponentFixture<EditUnvan2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUnvan2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnvan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
