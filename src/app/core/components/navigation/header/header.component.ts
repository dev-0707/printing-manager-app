import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('APP_TOOLBAR_TITLE').subscribe(value => {
      console.log(value);
    });
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
