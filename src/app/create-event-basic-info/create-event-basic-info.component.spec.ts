import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventBasicInfoComponent } from './create-event-basic-info.component';

describe('CreateEventBasicInfoComponent', () => {
  let component: CreateEventBasicInfoComponent;
  let fixture: ComponentFixture<CreateEventBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
