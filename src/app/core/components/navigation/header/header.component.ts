import { LoggerService } from './../../../../../../projects/utils/src/lib/services/logger/logger.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private translate: TranslateService, private logger: LoggerService) { }

  ngOnInit() {
    this.translate.get('APP_TOOLBAR_TITLE').subscribe(value => {
      // TODO: Header logger
      console.log(value);
    });
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
