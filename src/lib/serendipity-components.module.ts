import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

//
// Bar components
//

import { ActivityBarComponent } from './components/activity-bar/activity-bar.component';
import { CommandBarComponent } from './components/command-bar/command-bar.component';

//
// Dialog components
//

import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { NGXLogger } from 'ngx-logger';

const serendipityComponents = [
  ActivityBarComponent,
  CommandBarComponent,
  AlertDialogComponent,
  ConfirmDialogComponent
] ;

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [
    ...serendipityComponents
    ],
  exports: [
    ...serendipityComponents
    ],
  entryComponents: [
    ...serendipityComponents
  ]
})
export class SerendipityComponentsModule {

  constructor(private logger: NGXLogger) {

    this.logger.info('Serendipity Components Module initialised');
  }

}
