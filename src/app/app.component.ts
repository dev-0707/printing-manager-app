import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(private translate: TranslateService) {
    this.translate.get('APP_NAME').subscribe(value => {
      this.title = value;
    });
  }
}
