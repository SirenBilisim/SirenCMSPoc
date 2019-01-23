import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnvanListComponent } from './unvan-list.component';

describe('UnvanListComponent', () => {
  let component: UnvanListComponent;
  let fixture: ComponentFixture<UnvanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnvanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnvanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
