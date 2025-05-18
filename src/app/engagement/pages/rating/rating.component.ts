import { Component } from '@angular/core';
import {AddRatingComponent} from '../../components/add-rating/add-rating.component';
import {ToolbarComponent} from '../../../public/components/toolbar/toolbar.component';

@Component({
  selector: 'app-rating',
  imports: [
    AddRatingComponent,
    ToolbarComponent
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

}
