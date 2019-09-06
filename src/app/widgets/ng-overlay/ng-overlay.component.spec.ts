import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOverlayComponent } from './ng-overlay.component';

describe('NgOverlayComponent', () => {
  let component: NgOverlayComponent;
  let fixture: ComponentFixture<NgOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
