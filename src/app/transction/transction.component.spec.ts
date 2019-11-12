import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransctionComponent } from './transction.component';

describe('TransctionComponent', () => {
  let component: TransctionComponent;
  let fixture: ComponentFixture<TransctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
