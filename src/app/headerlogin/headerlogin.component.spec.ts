import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderloginComponent } from './headerlogin.component';

describe('HeaderloginComponent', () => {
  let component: HeaderloginComponent;
  let fixture: ComponentFixture<HeaderloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
