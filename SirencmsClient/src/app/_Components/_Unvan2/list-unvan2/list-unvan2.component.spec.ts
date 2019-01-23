import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnvan2Component } from './list-unvan2.component';

describe('ListUnvan2Component', () => {
  let component: ListUnvan2Component;
  let fixture: ComponentFixture<ListUnvan2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUnvan2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUnvan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
