import { NGXLogger } from 'ngx-logger';
import { Inject, Injectable } from '@angular/core';

import { Logger } from './logger';

import { UtilsConfig } from '../../models/models';
import { UtilsConfigService } from '../config.service';

const noop = (): any => undefined;

@Injectable({
  providedIn: 'root'
})
export class NGXLoggerService implements Logger {

  constructor(@Inject(UtilsConfigService) private config: UtilsConfig, private logger: NGXLogger) {

    if (this.config.isDebugMode) {
      this.logger.debug('Console Logger Service registered');
    }

  }

  get info() {
    if (this.config.isDebugMode) {
      return this.logger.info.bind(this.logger);
    } else {
      return noop;
    }
  }

  get warn() {
    if (this.config.isDebugMode) {
      return this.logger.warn.bind(this.logger);
    } else {
      return noop;
    }
  }

  get error() {
    if (this.config.isDebugMode) {
      return this.logger.error;
    } else {
      return noop;
    }
  }

}
