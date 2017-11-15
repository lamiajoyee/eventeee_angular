import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventPicturesComponent } from './create-event-pictures.component';

describe('CreateEventPicturesComponent', () => {
  let component: CreateEventPicturesComponent;
  let fixture: ComponentFixture<CreateEventPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
