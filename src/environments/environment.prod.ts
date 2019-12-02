import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  apiUrl: 'http://localhost:3000',
  logLevel: NgxLoggerLevel.INFO,
  serverLogLevel: NgxLoggerLevel.OFF,
  defaultLanguage: 'en-gb', // 'en-gb', 'de-ch'
  isDebugMode: false,  
};
