import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnvanComponent } from './add-unvan.component';

describe('AddUnvanComponent', () => {
  let component: AddUnvanComponent;
  let fixture: ComponentFixture<AddUnvanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUnvanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
