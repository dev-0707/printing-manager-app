import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { HTTPService } from '../../../http-service';
import { SearchField } from '../../../core/model/search-field';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends HTTPService {

  delete(id: String) {
    return this.httpClient.delete(`${environment.locationsApiURL}/${id}`);
  }

  constructor(private httpClient: HttpClient, private logger: NGXLogger) {
    super();
  }

  findAll(searchField: SearchField[], sort: string, sortOrder: string,
    pageNumber, pageSize): Observable<Location[]> {
    const httpParams = this.buildHttpParams(searchField, sort, sortOrder, pageNumber, pageSize);
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<Location[]>(`${environment.locationsApiURL}`, { params: httpParams, observe: 'response'}).pipe(map((response) => {
      const count: number = Number.parseInt(response.headers.get('X-Total-Count'));
      this.logger.debug(`Retrieving ${count} locations`);
      const result = <Location[]>response.body;
      return result;
    }));
  }
}
