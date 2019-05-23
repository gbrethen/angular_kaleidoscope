import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonelementComponent } from './commonelement.component';

describe('CommonelementComponent', () => {
  let component: CommonelementComponent;
  let fixture: ComponentFixture<CommonelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
