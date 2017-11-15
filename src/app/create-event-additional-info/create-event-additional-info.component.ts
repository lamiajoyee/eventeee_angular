import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-create-event-additional-info',
  templateUrl: './create-event-additional-info.component.html',
  styleUrls: ['./create-event-additional-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateEventAdditionalInfoComponent implements OnInit {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  Privacies = [
    'Public',
    'Private'
  ];
  constructor() { }

  ngOnInit() {
  }

}
