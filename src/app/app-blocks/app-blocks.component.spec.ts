import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlocksComponent } from './app-blocks.component';

describe('AppBlocksComponent', () => {
  let component: AppBlocksComponent;
  let fixture: ComponentFixture<AppBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
