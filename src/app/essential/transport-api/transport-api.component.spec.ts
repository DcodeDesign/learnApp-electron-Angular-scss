import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportAPIComponent } from './transport-api.component';

describe('TransportAPIComponent', () => {
  let component: TransportAPIComponent;
  let fixture: ComponentFixture<TransportAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
