import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventSequenceTabsComponent } from './create-event-sequence-tabs.component';

describe('CreateEventSequenceTabsComponent', () => {
  let component: CreateEventSequenceTabsComponent;
  let fixture: ComponentFixture<CreateEventSequenceTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventSequenceTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventSequenceTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
