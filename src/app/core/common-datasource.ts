import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { SearchField } from './model/search-field';

export abstract class CommonDatasource {

    protected count = 0;
    protected datasourceSubject = new BehaviorSubject<Location[]>([]);
    protected datasourceLoading = new BehaviorSubject<boolean>(false);
    public loading$ = this.datasourceLoading.asObservable();

    connect(collectionViewer: CollectionViewer): Observable<Location[]> {
        return this.datasourceSubject.asObservable();
      }

      disconnect(collectionViewer: CollectionViewer): void {
        this.datasourceSubject.complete();
        this.datasourceLoading.complete();
      }

      abstract findAll(searchField: SearchField[], sort: string, sortOrder: string, pageNumber, pageSize);
}
