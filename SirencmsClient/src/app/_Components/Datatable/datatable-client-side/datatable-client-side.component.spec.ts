import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableClientSideComponent } from './datatable-client-side.component';

describe('DatatableClientSideComponent', () => {
  let component: DatatableClientSideComponent;
  let fixture: ComponentFixture<DatatableClientSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableClientSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableClientSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
