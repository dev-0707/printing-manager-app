import { SearchField } from '../../core/model/search-field';
import { DataSource } from '@angular/cdk/table';
import { tap, catchError, finalize } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { LocationService } from '../service/location.service';
import { CommonDatasource } from '../../core/common-datasource';
import { of } from 'rxjs';


export class LocationDatasource extends CommonDatasource<Location> implements DataSource<Location> {

  constructor(private locationService: LocationService) {
    super();
  }

  findAll(searchField: SearchField[], sort: string, sortOrder: string,
    pageNumber, pageSize) {
    this.datasourceLoading.next(true);

      if (!pageSize) {
        pageSize = 10;
      }

      this.locationService.findAll(searchField, sort, sortOrder, pageNumber, pageSize).pipe(
        catchError(() => of([])),
        finalize(() => this.datasourceLoading.next(false))
        ).subscribe(locations => {
          this.count = locations.length;
          this.datasourceSubject.next(locations);
        });
      }

   delete(id: String) {
     return this.locationService.delete(id);
   }
}
