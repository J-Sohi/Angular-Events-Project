import { Routes } from '@angular/router'
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { createEventComponent } from './events/create-event.component';

export const appRoutes:Routes = [
    {path: 'events/new', component: createEventComponent},
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]