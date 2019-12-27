import { NGXLogger } from 'ngx-logger';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private logger: NGXLogger) {
    this.logger.debug('GlobalErrorHandler initialised');
  }

  handleError(error) {
    this.logger.error(`GlobalErrorHandler: ${error}`);
    window.alert(error);
  }
}