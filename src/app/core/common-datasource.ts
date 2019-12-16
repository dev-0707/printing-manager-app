import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { SearchField } from './model/search-field';

export abstract class CommonDatasource<T> {

    protected count = 0;
    protected datasourceSubject = new BehaviorSubject<T[]>([]);
    protected datasourceLoading = new BehaviorSubject<boolean>(false);
    public loading$ = this.datasourceLoading.asObservable();

    connect(collectionViewer: CollectionViewer): Observable<T[]> {
        return this.datasourceSubject.asObservable();
      }

      disconnect(collectionViewer: CollectionViewer): void {
        this.datasourceSubject.complete();
        this.datasourceLoading.complete();
      }

      abstract findAll(searchField: SearchField[], sort: string, sortOrder: string, pageNumber, pageSize);
}
