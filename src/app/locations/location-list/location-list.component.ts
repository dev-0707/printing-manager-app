import { LocationDatasource } from '../datasource/location-datasource';
import { LocationService } from '../service/location.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { CrudComponent } from '../../core/crud-component';
import { ActivatedRoute } from '@angular/router';
import { SearchField } from '../../core/model/search-field';


@Component({
  selector: 'app-location',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent extends CrudComponent implements OnInit, AfterViewInit {

  selectedLocation: Location;

  // Material table columns
  displayedColumns: string[] = ['locationNumber', 'locationType', 'actions'];
  datasource: LocationDatasource;

  constructor(private route: ActivatedRoute, private locationService: LocationService, private logger: NGXLogger) {
    super();
  }

  ngOnInit() {
    this.datasource = new LocationDatasource(this.locationService);
    this.datasource.findAll(this.searchFields, this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

  loadData() {
    this.datasource.findAll(this.searchFields,
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

  locationTypeFilterChangeAction(locationTypeFilter: string) {
    const searchField = new SearchField('locationType', locationTypeFilter);
    this.searchFields = [searchField];
    this.loadData();
  }

  delete(id: String) {
    return this.datasource.delete(id).subscribe(() => this.loadData());
  }

  onSelect(location: Location){
    this.selectedLocation = location;
  }
}
