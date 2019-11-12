import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainpageComponent } from './user-mainpage.component';

describe('UserMainpageComponent', () => {
  let component: UserMainpageComponent;
  let fixture: ComponentFixture<UserMainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
