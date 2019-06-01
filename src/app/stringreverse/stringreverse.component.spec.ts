import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringreverseComponent } from './stringreverse.component';

describe('StringreverseComponent', () => {
  let component: StringreverseComponent;
  let fixture: ComponentFixture<StringreverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringreverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringreverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
