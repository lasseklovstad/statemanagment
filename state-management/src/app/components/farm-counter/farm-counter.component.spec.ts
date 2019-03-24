import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmCounterComponent } from './farm-counter.component';

describe('FarmCounterComponent', () => {
  let component: FarmCounterComponent;
  let fixture: ComponentFixture<FarmCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
