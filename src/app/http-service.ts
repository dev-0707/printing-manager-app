import { HttpParams } from '@angular/common/http';
import { SearchField } from './core/model/search-field';

export class HTTPService {

    protected buildHttpParams(searchField: SearchField[], sort: string, sortOrder: string,
        pageNumber, pageSize: number = 10): HttpParams {
        let params;
        if (searchField) {
            // tslint:disable-next-line:max-line-length
            params = new HttpParams().set('_sort', sort).set('_order', sortOrder).set('_page', pageNumber.toString()).set('_limit', pageSize.toString());

            searchField.forEach(element => {
                params = params.set(element.name, element.value);
            });

        } else {
            // tslint:disable-next-line:max-line-length
            params = new HttpParams().set('_sort', sort).set('_order', sortOrder).set('_page', pageNumber.toString()).set('_limit', pageSize.toString());
        }
        return params;
    }

}
