import { SearchField } from '../core/model/search-field';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { merge } from 'rxjs';
import { MatPaginator, MatSort } from '@angular/material';

export abstract class CrudComponent implements AfterViewInit {
  protected searchFields: SearchField[] = [];
  protected searchFieldsTmp: SearchField[] = [];

  // View childs injected for pagination and sorting
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // View child injected for text search
  @ViewChild('input') input: ElementRef;


  ngAfterViewInit() {
    // server-side search
    // fromEvent(this.input.nativeElement, 'keyup')
    //   .pipe(
    //     debounceTime(150),
    //     distinctUntilChanged(),
    //     tap(() => {
    //       this.paginator.pageIndex = 0;
    //     })
    //   )
    //   .subscribe();

    // reset the paginator after sorting
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    // on sort or paginate events, load a new page
    merge(this.sort.sortChange, this.paginator.page)
      .subscribe(() => this.loadData());
  }

  abstract delete(id: String);

  reload() {
    this.searchFields = [];
    this.loadData();
  }

  abstract loadData();
}
