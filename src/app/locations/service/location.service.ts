import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { HTTPService } from '../../http-service';
import { SearchField } from '../../core/model/search-field';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends HTTPService {

  delete(id: String): Observable<Object> {
    return this.httpClient.delete(`${environment.locationsApiURL}/${id}`, {observe: 'response'});
  }

  findById(id: String): Observable<Object> {
    return this.httpClient.delete(`${environment.locationsApiURL}/${id}`, {observe: 'response'});
  }

  constructor(private httpClient: HttpClient, private logger: NGXLogger) {
    super();
  }

  findAll(searchField: SearchField[], sort = 'locationType', sortOrder = 'asc',
    pageNumber = 1, pageSize = 10): Observable<Location[]> {
    const httpParams = this.buildHttpParams(searchField, sort, sortOrder, pageNumber, pageSize);
    return this.httpClient.get<Location[]>(`${environment.locationsApiURL}`, {params: httpParams});
  }

  public findOne(id: string): Observable<Location> {

    return this.httpClient.get<Location>(`${environment.locationsApiURL}/${id}`).pipe(
      tap(() => {
        this.logger.debug('ContactsService: findOne() completed');
      }));
  }

}
