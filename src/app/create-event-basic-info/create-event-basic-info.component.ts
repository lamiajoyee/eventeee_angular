import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as moment from 'moment';


export const MY_FORMATS = {
  parse: {
    dateInput: 'LLLL',
  },
  display: {
    dateInput: 'LLLL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LLLL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-create-event-basic-info',
  templateUrl: './create-event-basic-info.component.html',
  styleUrls: ['./create-event-basic-info.component.css'],
  providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
              { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
  encapsulation: ViewEncapsulation.None
})
export class CreateEventBasicInfoComponent implements OnInit {
 
  date = new FormControl(moment());
  constructor() { }

  ngOnInit() {
    //
  }

}
