import { LocationService } from '../service/location.service';
import { NGXLogger } from 'ngx-logger';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input()
  location: Location;
  subscriptions: Subscription[] = [];
  locationNumber: string;

  constructor(private logger: NGXLogger, private route: ActivatedRoute,
    private router: Router, private locationService: LocationService) { }

  public ngOnInit() {
    let paramSubscription: Subscription = new Subscription();
    this.subscriptions.push(paramSubscription);

    paramSubscription = this.route.paramMap.subscribe(params =>  {

      this.locationNumber = params.get('id');

      this.subscribe();

    });

  }

  async subscribe() {

    this.logger.debug('ContactComponent: subscribe()');
    let modelSubscription: Subscription = new Subscription();
    this.subscriptions.push(modelSubscription);

    modelSubscription = this.locationService.findOne(this.locationNumber).subscribe(data => {
      this.location = data;
    });

  }
}
