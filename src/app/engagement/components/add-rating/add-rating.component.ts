import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BaseFormComponent } from '../../../shared/components/base-form.component';
import { AttendeeService } from '../../../registration/services/attendee.service';
import { RatingService } from '../../services/rating.service';

@Component({
  selector: 'app-add-rating',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.css']
})
export class AddRatingComponent extends BaseFormComponent {

  private fb = inject(FormBuilder);
  private attendeeService = inject(AttendeeService);
  private ratingService = inject(RatingService);
  private snackBar = inject(MatSnackBar);

  isSubmitting = false;

  ratingForm = this.fb.group({
    ticketIdentifier: ['', Validators.required],
    rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]]
  });

  onSubmit(): void {
    if (this.ratingForm.invalid) {
      this.ratingForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const { ticketIdentifier, rating } = this.ratingForm.value;

    // 1. Buscar el attendee con el ticketIdentifier dado
    this.attendeeService.getAll().subscribe({
      next: (attendees) => {
        const attendee = attendees.find(a => a.ticketIdentifier === ticketIdentifier);

        if (!attendee) {
          this.showMessage('Invalid Ticket Identifier');
          this.isSubmitting = false;
          return;
        }

        // 2. Verificar que el attendee haya hecho check-in
        if (!attendee.checkedInAt) {
          this.showMessage('You can only rate events you have attended to');
          this.isSubmitting = false;
          return;
        }

        // 3. Verificar que no haya una calificación previa para este evento y attendee
        this.ratingService.getAll().subscribe({
          next: (ratings) => {
            const alreadyRated = ratings.some(r => r.attendeeId === attendee.id && r.eventId === attendee.eventId);
            if (alreadyRated) {
              this.showMessage('You have already rated this event');
              this.isSubmitting = false;
              return;
            }

            // 4. Crear nueva calificación
            this.ratingService.create({
              attendeeId: attendee.id,
              eventId: attendee.eventId,
              rating: Number(rating),
              ratedAt: new Date().toISOString()
            }).subscribe({
              next: () => {
                this.showMessage('Event successfully rated');
                this.ratingForm.reset();
                this.isSubmitting = false;
              },
              error: () => {
                this.showMessage('Error submitting rating');
                this.isSubmitting = false;
              }
            });
          },
          error: () => {
            this.showMessage('Error verifying existing ratings');
            this.isSubmitting = false;
          }
        });
      },
      error: () => {
        this.showMessage('Error validating ticket');
        this.isSubmitting = false;
      }
    });
  }

  private showMessage(message: string): void {
    this.snackBar.open(message, 'Close', { duration: 3000 });
  }

}
