import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudMessagingComponent } from './cloud-messaging.component';

describe('CloudMessagingComponent', () => {
  let component: CloudMessagingComponent;
  let fixture: ComponentFixture<CloudMessagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudMessagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
