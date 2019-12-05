import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { HTTPService } from '../../../http-service';
import { SearchField } from '../../../core/model/search-field';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends HTTPService {

  delete(id: String): Observable<Object> {
    return this.httpClient.delete(`${environment.locationsApiURL}/${id}`, {observe: 'response'});
  }

  constructor(private httpClient: HttpClient, private logger: NGXLogger) {
    super();
  }

  findAll(searchField: SearchField[], sort: string, sortOrder: string,
    pageNumber, pageSize): Observable<Location[]> {
    const httpParams = this.buildHttpParams(searchField, sort, sortOrder, pageNumber, pageSize);
    // tslint:disable-next-line:max-line-length
    // this.logger.debug(`Invoking ${`${environment.locationsApiURL}`} with the following params`);
    // this.logger.debug(`${httpParams}`);
    return this.httpClient.get<Location[]>(`${environment.locationsApiURL}`, {params: httpParams});
  }
}
