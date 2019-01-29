import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableServerSideComponent } from './datatable-server-side.component';

describe('DatatableServerSideComponent', () => {
  let component: DatatableServerSideComponent;
  let fixture: ComponentFixture<DatatableServerSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableServerSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableServerSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
