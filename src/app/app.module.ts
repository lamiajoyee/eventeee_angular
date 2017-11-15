import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule, MatSelectModule } from '@angular/material';

import { MomentModule } from 'angular2-moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateEventSequenceTabsComponent } from './create-event-sequence-tabs/create-event-sequence-tabs.component';
import { CreateEventBasicInfoComponent } from './create-event-basic-info/create-event-basic-info.component';
import { CreateEventAdditionalInfoComponent } from './create-event-additional-info/create-event-additional-info.component';
import { CreateEventPicturesComponent } from './create-event-pictures/create-event-pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    CreateEventSequenceTabsComponent,
    CreateEventBasicInfoComponent,
    CreateEventAdditionalInfoComponent,
    CreateEventPicturesComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatTabsModule, MatGridListModule, FlexLayoutModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, ReactiveFormsModule, MatDatepickerModule, MomentModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule, MatSelectModule
  ],
  providers: [MomentDateAdapter],
  bootstrap: [AppComponent]
})
export class AppModule { }
