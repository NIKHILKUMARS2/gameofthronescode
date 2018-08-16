import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglehouseComponent } from './singlehouse.component';

describe('SinglehouseComponent', () => {
  let component: SinglehouseComponent;
  let fixture: ComponentFixture<SinglehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
