import { NGXLogger } from 'ngx-logger';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private logger: NGXLogger) {
    this.logger.info('GlobalErrorHandler initialised');
  }

  handleError(error) {
    this.logger.info('GlobalErrorHandler: handleError()');
    window.alert(error);
  }
}