import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreateComponent } from './empcreate.component';

describe('EmpcreateComponent', () => {
  let component: EmpcreateComponent;
  let fixture: ComponentFixture<EmpcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpcreateComponent]
    });
    fixture = TestBed.createComponent(EmpcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
