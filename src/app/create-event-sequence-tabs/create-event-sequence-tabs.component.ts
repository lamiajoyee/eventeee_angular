import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-create-event-sequence-tabs',
  templateUrl: './create-event-sequence-tabs.component.html',
  styleUrls: ['./create-event-sequence-tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateEventSequenceTabsComponent implements OnInit {
  @Input() activeTabNumber: number = 1;
  
  ngOnInit() {
  }


}
