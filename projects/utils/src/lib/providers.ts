import { LoggerService } from './services/logger/logger.service';
import { ConsoleLoggerService } from './services/logger/console-logger.service';
import { NGXLoggerService } from './services/logger/ngx-logger.service';

export const loggerProviders = [
  { provide: LoggerService, useClass: NGXLoggerService }
];
