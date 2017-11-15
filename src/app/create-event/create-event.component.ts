import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CreateEventSequenceTabsComponent } from '../create-event-sequence-tabs/create-event-sequence-tabs.component';
import { CreateEventBasicInfoComponent } from '../create-event-basic-info/create-event-basic-info.component';
import { CreateEventAdditionalInfoComponent } from '../create-event-additional-info/create-event-additional-info.component';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateEventComponent implements OnInit {
  isBasicActive = true;
  isAdditionalActive = false;
  isPicturesActive = false;
  activeTabIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  onClickNext() {
    
    if(this.activeTabIndex<2)
    { 
      this.activeTabIndex++;
    }

    switch(this.activeTabIndex){
      case 1:this.isBasicActive = false;
             this.isAdditionalActive = true;
             break;
      case 2:this.isAdditionalActive = false;
             this.isPicturesActive = true;
             break;
    }
  }

  onClickPrevious() {
    
    if(this.activeTabIndex>0)
    { 
      this.activeTabIndex--;
    }

    switch(this.activeTabIndex){
      case 0:this.isAdditionalActive = false;
             this.isBasicActive = true;
             break;
      case 1:this.isPicturesActive = false;
             this.isAdditionalActive = true;
             break;
    }
  }
}
