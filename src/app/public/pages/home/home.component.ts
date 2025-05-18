import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../registration/services/event.service';
import {Event} from '../../../registration/model/event.entity';
import {RegisteredEventsComponent} from '../../../registration/components/registered-events/registered-events.component';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RegisteredEventsComponent,
    ToolbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  events: Event[] = [];
  errorMessage: string | null = null;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAll().subscribe({
      next: (response) => {
        this.events = response;
      },
      error: (error) => {
        console.error('Error loading events:', error);
        this.errorMessage = 'Error loading events, please try again later.';
      }
    });
  }

}
