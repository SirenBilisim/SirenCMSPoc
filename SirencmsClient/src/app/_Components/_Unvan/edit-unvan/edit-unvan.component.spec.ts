import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnvanComponent } from './edit-unvan.component';

describe('EditUnvanComponent', () => {
  let component: EditUnvanComponent;
  let fixture: ComponentFixture<EditUnvanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUnvanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
