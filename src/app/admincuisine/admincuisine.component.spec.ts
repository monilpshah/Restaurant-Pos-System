import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincuisineComponent } from './admincuisine.component';

describe('AdmincuisineComponent', () => {
  let component: AdmincuisineComponent;
  let fixture: ComponentFixture<AdmincuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
