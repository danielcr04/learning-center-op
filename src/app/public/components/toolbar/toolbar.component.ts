import {Component, inject} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {LogoApiService} from '../../../shared/services/logo-api.service';

/**
 * ToolbarComponent
 * Summary: Main navigation toolbar with logo, certification text, menu buttons, and language selector.
 * Provides accessibility attributes and supports language switching with ngx-translate.
 * @author Your Name
 */
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatSelectModule, RouterModule, LanguageSwitcherComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  options = [
    { path: '/home', title: 'Home' },
    { path:'/engagement/ratings/new', title: 'NewRating' }
  ]
}
