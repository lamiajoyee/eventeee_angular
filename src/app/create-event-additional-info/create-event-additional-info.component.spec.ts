import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventAdditionalInfoComponent } from './create-event-additional-info.component';

describe('CreateEventAdditionalInfoComponent', () => {
  let component: CreateEventAdditionalInfoComponent;
  let fixture: ComponentFixture<CreateEventAdditionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventAdditionalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
