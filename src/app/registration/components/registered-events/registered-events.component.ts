import {Component, Input} from '@angular/core';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {EventSummaryComponent} from '../event-summary/event-summary.component';
import {Event} from '../../model/event.entity'

@Component({
  selector: 'app-registered-events',
  standalone : true,
  imports: [
    MatGridList,
    EventSummaryComponent,
    MatGridTile
  ],
  templateUrl: './registered-events.component.html',
  styleUrl: './registered-events.component.css'
})
export class RegisteredEventsComponent {
  @Input() events: Event[]=[];
}
