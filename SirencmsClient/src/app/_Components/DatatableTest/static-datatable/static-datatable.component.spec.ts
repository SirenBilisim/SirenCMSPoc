import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticDatatableComponent } from './static-datatable.component';

describe('StaticDatatableComponent', () => {
  let component: StaticDatatableComponent;
  let fixture: ComponentFixture<StaticDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
