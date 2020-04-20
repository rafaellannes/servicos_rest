import { NgModule } from '@angular/core';
import { ScheduleFormPageRoutingModule } from './schedule-form-routing.module';

import { ScheduleFormPage } from './schedule-form.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ScheduleFormPageRoutingModule
  ],
  declarations: [ScheduleFormPage]
})
export class ScheduleFormPageModule {}
