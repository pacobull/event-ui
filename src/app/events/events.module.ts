import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

@NgModule({
  declarations: [
    EventListComponent,
    EventFormComponent,
    EventDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventsModule { }