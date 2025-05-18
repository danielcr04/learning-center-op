import {Component, Input, OnInit} from '@angular/core';
import {AttendeeService} from '../../services/attendee.service';
import {RatingService} from '../../../engagement/services/rating.service';
import {Attendee} from '../../model/attendee.entity';
import {Event} from '../../model/event.entity'
import {Rating} from '../../../engagement/model/rating.entity';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from '@angular/material/card';

@Component({
  selector: 'app-event-summary',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter
  ],
  templateUrl: './event-summary.component.html',
  styleUrl: './event-summary.component.css'
})
export class EventSummaryComponent implements OnInit {
  @Input() event!: Event;
  checkedInCount: number = 0;
  averageRating: number | null = null;

  constructor(
    private attendeeService: AttendeeService,
    private ratingService: RatingService
  ) {}

  ngOnInit() {
    this.loadCheckedInCount();
    this.loadAverageRating();
  }

  private loadCheckedInCount() {
    this.attendeeService.getAll().subscribe((attendees: Attendee[]) => {
      this.checkedInCount = attendees.filter(
        (a) =>
          a.eventId===this.event.id &&
          a.checkedInAt !== null && a.checkedInAt !== ''
      ).length;
    });
  }

  private loadAverageRating() {
    this.ratingService.getAll().subscribe((ratings: Rating[]) => {
      const eventRatings = ratings.filter((r) => r.eventId===this.event.id);

      if(eventRatings.length === 0){
        this.averageRating = null;
      } else {
        let sum = 0;
        eventRatings.forEach((r) => sum+=r.rating);
        this.averageRating = parseFloat((sum/eventRatings.length).toFixed(1));
      }
    })
  }
}
