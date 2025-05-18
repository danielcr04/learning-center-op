import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {ToolbarComponent} from './public/components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica_ep2';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

}
