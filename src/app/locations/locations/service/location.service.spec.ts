import { LocationService } from './location.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NGXLogger } from 'ngx-logger';


describe('Shared service:', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationService, {provide: NGXLogger}],
      imports: [HttpClientTestingModule]
    });
  });
    describe(':', () => {

      function setup() {
        const locationService = TestBed.get(LocationService);
        const httpTestingController = TestBed.get(HttpTestingController);
        return { locationService, httpTestingController };
      }

      it('should get locations', () => {
        const { locationService, httpTestingController } = setup();
        const locations = '"locations": [{"id": 4,"locationNumber": 4,"locationType": "Pharmacy"}]';
        locationService.findAll([], '', '', 1, 10).subscribe(data => {
          expect(data.body).toEqual(locations);
        });

        const req = httpTestingController.expectOne('http://localhost:3000/locations?_sort=&_order=&_page=1&_limit=10');

        expect(req.request.method).toBe('GET');

        req.flush({
          body: locations
        });
      });

      it('should delete a location', () => {
        const { locationService, httpTestingController } = setup();
        locationService.delete(4).subscribe(response => {
          expect(response.status).toBe(200);
        });

        const req = httpTestingController.expectOne('http://localhost:3000/locations/4');

        expect(req.request.method).toBe('DELETE');
        const mockErrorResponse = { status: 200, statusText: 'No content' };
        req.flush(mockErrorResponse);
      });

      afterEach(() => {
        const { httpTestingController } = setup();
        httpTestingController.verify();
      });
    });
});
