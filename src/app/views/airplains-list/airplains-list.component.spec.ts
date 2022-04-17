import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplainsListComponent } from './airplains-list.component';

describe('AirplainsListComponent', () => {
  let component: AirplainsListComponent;
  let fixture: ComponentFixture<AirplainsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplainsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplainsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
